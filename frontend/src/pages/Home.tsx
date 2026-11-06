import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Code2,
  Database,
  GitBranch,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Server,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";

const email = "bhowmickatanu083@gmail.com";
const phone = "+91 9679644406";
const linkedIn = "https://www.linkedin.com/in/atanu-bhowmick-a077aa283";
const github = "https://github.com/atanubhowmick";

const navItems = [
  { label: "Home", href: "/", isRoute: true },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Skills", href: "/skills", isRoute: true },
  { label: "Experience", href: "#experience", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
] as const;

const experiences = [
  {
    year: "2024 — PRESENT",
    title: "Data Engineering & AI Projects",
    org: "Independent / Open Source",
    copy: "Building end-to-end data pipelines, ML model deployment pipelines, and real-time analytics systems. Focus on Apache Spark, Kafka, Airflow, and cloud-native architectures.",
    icon: Database,
    accent: "sky",
  },
  {
    year: "2023 — 2024",
    title: "MLOps & Model Deployment",
    org: "Personal Projects & Learning",
    copy: "Designed CI/CD pipelines for ML models using MLflow, Kubeflow, and Docker. Implemented model monitoring, drift detection, and automated retraining workflows.",
    icon: Brain,
    accent: "indigo",
  },
  {
    year: "2022 — 2023",
    title: "Cloud Infrastructure & DevOps",
    org: "Self-Directed / Certifications",
    copy: "Architected scalable infrastructure on AWS/GCP using Terraform, Kubernetes, and GitOps. Built CI/CD pipelines with GitHub Actions and ArgoCD.",
    icon: Server,
    accent: "amber",
  },
  {
    year: "2021 — 2022",
    title: "Full-Stack Development",
    org: "Freelance & Coursework",
    copy: "Developed React/TypeScript frontends and Python/Go backends. Built REST APIs, GraphQL services, and real-time applications with WebSockets.",
    icon: Code2,
    accent: "emerald",
  },
];

type SkillCategory = "All" | "Data Engineering" | "AI/ML" | "Cloud & DevOps" | "Software";

const skills: { name: string; category: Exclude<SkillCategory, "All">; detail: string; proficiency: number }[] = [
  { name: "Apache Spark", category: "Data Engineering", detail: "Distributed data processing", proficiency: 85 },
  { name: "Apache Kafka", category: "Data Engineering", detail: "Event streaming & messaging", proficiency: 80 },
  { name: "Apache Airflow", category: "Data Engineering", detail: "Workflow orchestration", proficiency: 85 },
  { name: "dbt", category: "Data Engineering", detail: "Data transformation & modeling", proficiency: 80 },
  { name: "Snowflake / BigQuery", category: "Data Engineering", detail: "Cloud data warehousing", proficiency: 75 },
  { name: "Python (Pandas, Polars)", category: "Data Engineering", detail: "Data manipulation & analysis", proficiency: 90 },
  { name: "SQL / NoSQL", category: "Data Engineering", detail: "Database design & optimization", proficiency: 85 },
  { name: "PyTorch / TensorFlow", category: "AI/ML", detail: "Deep learning frameworks", proficiency: 80 },
  { name: "MLflow / Kubeflow", category: "AI/ML", detail: "MLOps & experiment tracking", proficiency: 75 },
  { name: "Hugging Face", category: "AI/ML", detail: "Transformers & LLMs", proficiency: 80 },
  { name: "LangChain / LlamaIndex", category: "AI/ML", detail: "LLM application frameworks", proficiency: 70 },
  { name: "Model Serving (Triton, BentoML)", category: "AI/ML", detail: "Production model deployment", proficiency: 70 },
  { name: "AWS / GCP", category: "Cloud & DevOps", detail: "Cloud platforms", proficiency: 80 },
  { name: "Kubernetes / Docker", category: "Cloud & DevOps", detail: "Container orchestration", proficiency: 80 },
  { name: "Terraform", category: "Cloud & DevOps", detail: "Infrastructure as code", proficiency: 75 },
  { name: "GitHub Actions / ArgoCD", category: "Cloud & DevOps", detail: "CI/CD & GitOps", proficiency: 80 },
  { name: "Prometheus / Grafana", category: "Cloud & DevOps", detail: "Observability & monitoring", proficiency: 70 },
  { name: "React / TypeScript", category: "Software", detail: "Frontend development", proficiency: 85 },
  { name: "FastAPI / Go", category: "Software", detail: "Backend API development", proficiency: 85 },
  { name: "PostgreSQL / Redis", category: "Software", detail: "Databases & caching", proficiency: 80 },
  { name: "Git / Testing", category: "Software", detail: "Version control & quality", proficiency: 90 },
];

const qualifications = [
  {
    title: "B.Tech Electrical Engineering",
    org: "University",
    year: "2021",
    icon: BriefcaseBusiness,
    color: "sky",
    details: [
      "Strong foundation in mathematics, algorithms, and systems thinking",
      "Coursework: Data Structures, Algorithms, Signal Processing, Control Systems",
      "Capstone: Real-time signal processing pipeline implementation",
    ],
  },
  {
    title: "AWS Solutions Architect Associate",
    org: "Amazon Web Services",
    year: "2024",
    icon: Server,
    color: "amber",
    details: [
      "Designing resilient, scalable, and cost-optimized architectures",
      "Data lakes, analytics services, and serverless patterns",
    ],
  },
  {
    title: "Google Cloud Professional Data Engineer",
    org: "Google Cloud",
    year: "2024",
    icon: Database,
    color: "sky",
    details: [
      "Designing data processing systems on GCP",
      "BigQuery, Dataflow, Pub/Sub, and Dataproc expertise",
    ],
  },
  {
    title: "TensorFlow Developer Certificate",
    org: "Google",
    year: "2023",
    icon: Brain,
    color: "indigo",
    details: [
      "Building and training neural networks with TensorFlow",
      "Computer vision, NLP, and time series forecasting",
    ],
  },
];

function SectionHeading({ overline, title, copy, id }: { overline: string; title: string; copy?: string; id: string }) {
  return (
    <div className="mb-12 max-w-3xl" data-testid={`${id}-heading`}>
      <p className="section-kicker" data-testid={`${id}-overline`}>{overline}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" data-testid={`${id}-title`}>{title}</h2>
      {copy && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg" data-testid={`${id}-description`}>{copy}</p>}
    </div>
  );
}

function copyToClipboard(value: string, label: string) {
  const copyPromise = navigator.clipboard ? navigator.clipboard.writeText(value) : Promise.reject(new Error("clipboard unavailable"));
  copyPromise.then(
    () => toast.success(`${label} copied to clipboard`),
    () => toast.error(`Could not copy ${label.toLowerCase()}`),
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillCategory, setSkillCategory] = useState<SkillCategory>("All");

  const visibleSkills = skillCategory === "All" ? skills : skills.filter((skill) => skill.category === skillCategory);

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const subject = String(form.get("subject") ?? "Portfolio inquiry");
    const message = String(form.get("message") ?? "");
    toast.success("Your email draft is ready to send");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Atanu,\n\n${message}\n\nFrom: ${name}`)}`;
  }

  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-[#090d16] text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden="true">
        <div className="absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[40rem] h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl" data-testid="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-3" data-testid="nav-brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-sky-400/40 bg-sky-400/10 font-mono text-sm font-bold text-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.15)]">AB</span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">ATANU <span className="text-slate-500">/</span> DATA & AI</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300" data-testid={`nav-link-${item.label.toLowerCase()}`}>{item.label}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300 transition-colors" data-testid="nav-github" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300 transition-colors" data-testid="nav-linkedin" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${email}`} className="hidden items-center gap-2 rounded-full bg-sky-400 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition-transform hover:-translate-y-0.5 sm:flex" data-testid="nav-connect-cta">Contact <ArrowUpRight size={15} /></a>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-200 hover:bg-white/10 hover:text-sky-300 lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} data-testid="mobile-menu-toggle-button">
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-white/[0.08] px-5 py-4 lg:hidden" aria-label="Mobile navigation" data-testid="mobile-navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block border-b border-white/[0.06] py-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-300 hover:text-sky-300" data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}>{item.label}</a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <a href={github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="GitHub"><GitBranch size={18} /></a>
              <a href={linkedIn} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.06fr_.94fr] lg:px-8 lg:py-28" data-testid="hero-section">
          <div className="hero-reveal">
            <div className="mb-7 flex items-center gap-3" data-testid="hero-availability">
              <span className="live-dot h-2 w-2 rounded-full bg-emerald-300" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">Open to Data Engineering & AI roles</span>
            </div>
            <p className="section-kicker" data-testid="hero-eyebrow">Data Engineering × AI Engineering × Cloud</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.8rem]" data-testid="hero-title">Hi, I'm <span className="hero-gradient">Atanu Bhowmick</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl" data-testid="hero-role-badge">Building scalable data platforms, ML systems, and cloud-native infrastructure. Electrical engineer turned data & AI practitioner.</p>
            <div className="mt-8 flex flex-wrap gap-2" data-testid="hero-pillar-list">
              {["Data Pipelines", "MLOps", "Cloud Architecture", "Full-Stack"].map((item, index) => <Badge key={item} variant="outline" className={`rounded-full border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium ${index === 0 ? "text-sky-300" : "text-slate-400"}`} data-testid={`hero-pillar-${index + 1}`}>{item}</Badge>)}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3" data-testid="hero-actions">
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]" data-testid="hero-email-button">Get in touch <ArrowUpRight size={16} /></a>
              <a href={linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.04]" data-testid="hero-linkedin-link"><Linkedin size={16} /> LinkedIn</a>
              <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.04]" data-testid="hero-github-link"><GitBranch size={16} /> GitHub</a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5 border-t border-white/[0.08] pt-6 sm:grid-cols-4" data-testid="hero-facts">
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-one-value">4+</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-one-label">Core Domains</p></div>
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-two-value">20+</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-two-label">Technologies</p></div>
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-three-value">10+</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-three-label">Projects Built</p></div>
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-four-value">∞</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-four-label">Curiosity</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[33rem] hero-art" data-testid="hero-visual">
            <div className="absolute -inset-5 rounded-[2rem] border border-sky-400/10 bg-sky-400/[0.03] blur-sm" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-2 shadow-[0_0_70px_rgba(56,189,248,0.12)]">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[1.05rem] bg-[#101b2d]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.1)_0%,rgba(99,102,241,0.1)_50%,rgba(139,92,246,0.1)_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex justify-center gap-4 mb-6">
                      <Database className="text-sky-300 text-5xl opacity-80" size={48} />
                      <Zap className="text-amber-300 text-5xl opacity-80" size={48} />
                      <Brain className="text-indigo-300 text-5xl opacity-80" size={48} />
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300">Data → Intelligence → Action</p>
                    <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-white">Scalable pipelines powering AI at scale</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-[#121e36]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8" data-testid="hero-stat-card"><p className="font-mono text-[10px] uppercase tracking-[0.17em] text-slate-500">Focus</p><p className="mt-1 text-lg font-semibold text-white">Production-Ready Data & AI</p><div className="mt-3 h-1 w-36 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[90%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-300" /></div></div>
            <div className="absolute -right-3 top-16 rounded-lg border border-sky-400/20 bg-[#0f172a]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sky-300 backdrop-blur-xl sm:-right-8" data-testid="hero-tech-chip"><Sparkles size={13} className="mr-2 inline" /> Data × AI × Cloud</div>
          </div>
        </section>

        <section id="projects" className="section-shell" data-testid="projects-section-container">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading id="projects" overline="01 / FEATURED PROJECTS" title="End-to-end data & AI systems." copy="Production-grade projects demonstrating real-world data engineering and ML engineering patterns." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Real-Time Analytics Platform",
                  description: "Kafka + Spark Streaming + ClickHouse pipeline processing 1M+ events/sec with sub-second latency dashboards.",
                  tags: ["Kafka", "Spark", "ClickHouse", "Airflow", "Docker"],
                  icon: Zap,
                  color: "amber",
                  link: "#",
                },
                {
                  title: "ML Feature Store & Pipeline",
                  description: "Centralized feature store with Feast, automated feature engineering, and point-in-time correctness for ML models.",
                  tags: ["Feast", "Airflow", "PostgreSQL", "Python", "Great Expectations"],
                  icon: Database,
                  color: "sky",
                  link: "#",
                },
                {
                  title: "LLM RAG Pipeline for Docs",
                  description: "Production RAG system with LangChain, vector database, hybrid search, and evaluation framework for hallucination detection.",
                  tags: ["LangChain", "Pinecone", "OpenAI", "FastAPI", "LangSmith"],
                  icon: Brain,
                  color: "indigo",
                  link: "#",
                },
                {
                  title: "Data Quality Observatory",
                  description: "Automated data quality monitoring with Soda Core, anomaly detection, Slack alerts, and lineage tracking.",
                  tags: ["Soda Core", "Airflow", "dbt", "Slack API", "Grafana"],
                  icon: Clipboard,
                  color: "emerald",
                  link: "#",
                },
                {
                  title: "Kubernetes ML Platform",
                  description: "Kubeflow-based ML platform with model registry, pipeline orchestration, KServe inference, and GitOps deployment.",
                  tags: ["Kubeflow", "KServe", "ArgoCD", "MLflow", "Prometheus"],
                  icon: Server,
                  color: "amber",
                  link: "#",
                },
                {
                  title: "Streaming ETL with Flink",
                  description: "Exactly-once streaming ETL for CDC data with schema evolution, late arrival handling, and iceberg table format.",
                  tags: ["Flink", "Kafka", "Iceberg", "Debezium", "Schema Registry"],
                  icon: GitBranch,
                  color: "sky",
                  link: "#",
                },
              ].map((project, index) => (
                <Card key={index} className="card-surface group hover:border-white/10 transition-colors" data-testid={`project-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className={`grid h-10 w-10 place-items-center rounded-xl bg-${project.color}-400/10 text-${project.color}-300`}>
                        <project.icon size={20} />
                      </div>
                      <span className="font-mono text-xs text-slate-600">PROJECT / 0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white group-hover:text-sky-300 transition-colors" data-testid={`project-title-${index}`}>{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400" data-testid={`project-description-${index}`}>{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5" data-testid={`project-tags-${index}`}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-white/10 bg-white/[0.03] text-slate-400 hover:text-sky-300 hover:border-sky-400/30 text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                    <a href={project.link} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-white transition-colors" data-testid={`project-link-${index}`}>View code <ArrowUpRight size={14} /></a>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center" data-testid="projects-cta">
              <a href="/projects" className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]" data-testid="projects-view-all-button">View all projects <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell border-y border-white/[0.05] bg-[#0f172a]/30" data-testid="skills-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading id="skills" overline="02 / TECHNICAL EXPERTISE" title="Tools and technologies I use daily." copy="Depth across the modern data stack, with production experience in each category." />
            <div className="mb-8 flex flex-wrap items-center gap-2" data-testid="skills-filter" role="group" aria-label="Filter skills by category">
              {(["All", "Data Engineering", "AI/ML", "Cloud & DevOps", "Software"] as SkillCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSkillCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.1em] transition-all ${
                    skillCategory === cat
                      ? "bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      : "bg-white/[0.03] border border-white/10 text-slate-400 hover:text-sky-300 hover:border-sky-400/30"
                  }`}
                  data-testid={`skill-filter-${cat.toLowerCase().replace(/[&/\s]+/g, "-")}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-testid="skills-grid">
              {visibleSkills.map((skill) => (
                <Card key={skill.name} className="card-surface group" data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-white group-hover:text-sky-300 transition-colors truncate" data-testid={`skill-name-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.name}</h3>
                        <p className="mt-1 text-xs text-slate-500 truncate" data-testid={`skill-detail-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.detail}</p>
                      </div>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded bg-${skill.category === "Data Engineering" ? "sky" : skill.category === "AI/ML" ? "indigo" : skill.category === "Cloud & DevOps" ? "amber" : "emerald"}-400/10 text-${skill.category === "Data Engineering" ? "sky" : skill.category === "AI/ML" ? "indigo" : skill.category === "Cloud & DevOps" ? "amber" : "emerald"}-300`} data-testid={`skill-category-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {skill.category}
                      </span>
                    </div>
                    <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10" data-testid={`skill-bar-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className={`h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-300 transition-all duration-1000`} style={{ width: `${skill.proficiency}%` }} />
                    </div>
                    <p className="mt-2 text-right font-mono text-xs text-slate-500" data-testid={`skill-proficiency-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.proficiency}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center" data-testid="skills-cta">
              <a href="/skills" className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]" data-testid="skills-view-all-button">View all skills <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell" data-testid="experience-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading id="experience" overline="03 / JOURNEY" title="From circuits to distributed systems." copy="An electrical engineering foundation applied to modern data and AI challenges." />
            <div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-8 sm:pl-12">
              {experiences.map(({ year, title, org, copy, icon: Icon, accent }, index) => (
                <div key={title} className="relative mb-10 last:mb-0" data-testid={`timeline-item-${index + 1}`}>
                  <div className={`absolute -left-[43px] top-1 grid h-6 w-6 place-items-center rounded-full border border-${accent}-300/50 bg-[#090d16] text-${accent}-300 sm:-left-[61px]`}>
                    <Icon size={12} />
                  </div>
                  <div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:gap-10">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-300" data-testid={`timeline-year-${index + 1}`}>{year}</p>
                      <p className="mt-2 text-xs text-slate-600" data-testid={`timeline-index-${index + 1}`}>0{index + 1} / 04</p>
                    </div>
                    <Card className="card-surface" data-testid={`timeline-card-${index + 1}`}>
                      <CardContent className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-xl font-semibold text-white" data-testid={`timeline-title-${index + 1}`}>{title}</h3>
                          <span className="text-xs text-slate-500" data-testid={`timeline-org-${index + 1}`}>{org}</span>
                        </div>
                        <p className="mt-4 max-w-3xl leading-relaxed text-slate-400" data-testid={`timeline-copy-${index + 1}`}>{copy}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="qualifications" className="section-shell border-y border-white/[0.05] bg-[#0f172a]/30" data-testid="qualifications-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading id="qualifications" overline="04 / CERTIFICATIONS & EDUCATION" title="Validated expertise across the stack." copy="Industry-recognized certifications complementing a strong engineering foundation." />
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {qualifications.map((qual, index) => (
                <Card key={index} className="card-surface group" data-testid={`qualification-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${qual.color}-400/10 text-${qual.color}-300`}>
                        <qual.icon size={24} />
                      </div>
                      <span className="font-mono text-xs text-slate-600">CERT / 0{index + 1}</span>
                    </div>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300" data-testid={`qualification-overline-${index}`}>{qual.year}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white" data-testid={`qualification-title-${index}`}>{qual.title}</h3>
                    <p className="mt-1 text-sm text-slate-500" data-testid={`qualification-org-${index}`}>{qual.org}</p>
                    <ul className="mt-5 space-y-2" data-testid={`qualification-details-${index}`}>
                      {qual.details.map((detail, dIndex) => (
                        <li key={dIndex} className="flex items-start gap-2 text-sm text-slate-400" data-testid={`qualification-detail-${index}-${dIndex}`}>
                          <Check className="mt-0.5 flex-shrink-0 text-emerald-300" size={14} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell pb-24" data-testid="contact-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.11] via-[#121e36] to-indigo-500/[0.08] p-6 shadow-[0_0_70px_rgba(56,189,248,0.08)] sm:p-10 lg:p-14">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-[100px]" />
              <div className="relative grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="section-kicker" data-testid="contact-overline">05 / LET'S BUILD TOGETHER</p>
                  <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl" data-testid="contact-title">Have a data or AI challenge?</h2>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg" data-testid="contact-copy">I'm always interested in collaborating on interesting data engineering, MLOps, or AI infrastructure problems. Let's talk about what you're building.</p>
                  <div className="mt-8 space-y-4">
                    <button onClick={() => copyToClipboard(email, "Email")} className="flex items-center gap-3 text-left text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-email-copy-button">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Mail size={16} /></span>{email}<Clipboard size={14} className="text-slate-600" />
                    </button>
                    <a href={`tel:${phone.replaceAll(" ", "")}`} className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-phone-link">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Phone size={16} /></span>{phone}
                    </a>
                    <a href={linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-linkedin-button">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Linkedin size={16} /></span>LinkedIn
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-github-button">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><GitBranch size={16} /></span>GitHub
                    </a>
                  </div>
                </div>
                <form onSubmit={handleInquiry} className="relative w-full max-w-md" data-testid="contact-form">
                  <div className="grid gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.1em] text-slate-400">Name</label>
                      <input id="name" name="name" type="text" required className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/50" placeholder="Your name" data-testid="contact-name-input" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-[0.1em] text-slate-400">Subject</label>
                      <input id="subject" name="subject" type="text" className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/50" placeholder="Project inquiry / Collaboration / Role" data-testid="contact-subject-input" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.1em] text-slate-400">Message</label>
                      <textarea id="message" name="message" rows={4} required className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-sky-400/50 focus:outline-none focus:ring-1 focus:ring-sky-400/50 resize-none" placeholder="Tell me about your project, team, or opportunity..." data-testid="contact-message-textarea" />
                    </div>
                    <button type="submit" className="mt-2 w-full rounded-lg bg-sky-400 px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]" data-testid="contact-submit-button">Send message <ArrowUpRight size={16} /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08]" data-testid="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-mono text-xs text-slate-600" data-testid="footer-copyright">© 2024 Atanu Bhowmick. Built with data & curiosity.</p>
          <div className="flex items-center gap-5">
            <a href="#top" className="text-xs uppercase tracking-[0.16em] text-slate-500 hover:text-sky-300" data-testid="footer-back-to-top">Back to top <ArrowUpRight className="ml-1 inline" size={13} /></a>
            <a href={github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" data-testid="footer-github-link" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" data-testid="footer-linkedin-link" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={`mailto:${email}`} className="text-slate-500 hover:text-sky-300" data-testid="footer-email-link" aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
      </footer>
      <Toaster richColors />
    </div>
  );
}