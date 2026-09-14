import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clipboard,
  Code2,
  Download,
  ExternalLink,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
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
const eventImage =
  "https://images.unsplash.com/photo-1655392032420-4a8237b2ff94?auto=format&fit=crop&w=1200&q=85";

const navItems = [
  ["About", "about"],
  ["Capabilities", "capabilities"],
  ["Experience", "experience"],
  ["Qualifications", "qualifications"],
  ["Contact", "contact"],
] as const;

const pillars = [
  {
    number: "01",
    title: "Technology & Code",
    copy: "Building fluency in web development, programming and the digital products that make ideas usable.",
    icon: Code2,
    color: "text-sky-300",
  },
  {
    number: "02",
    title: "People & Communication",
    copy: "Client handling, sales conversations and team coordination grounded in clarity and trust.",
    icon: Users,
    color: "text-indigo-300",
  },
  {
    number: "03",
    title: "Events & Operations",
    copy: "From vendors and artists to logistics and security, I keep complex on-ground work moving.",
    icon: BriefcaseBusiness,
    color: "text-amber-300",
  },
  {
    number: "04",
    title: "Problem Solving",
    copy: "Taking ownership when plans change, staying calm under pressure and finding the next best move.",
    icon: Lightbulb,
    color: "text-emerald-300",
  },
];

const experiences = [
  {
    year: "COLLEGE LEADERSHIP",
    title: "Logistics & Security Head",
    org: "College mega event operations",
    copy: "Coordinated artists, vendors, security teams and volunteers across a high-energy live event. Balanced people, timings and safety while resolving issues in real time.",
    icon: ShieldCheck,
    accent: "sky",
  },
  {
    year: "PROFESSIONAL EXPERIENCE",
    title: "Business Development & Sales",
    org: "Client-facing growth & communication",
    copy: "Built confidence in prospect conversations, pitch presentations, client handling and understanding the needs behind a business requirement.",
    icon: Users,
    accent: "indigo",
  },
  {
    year: "PROFESSIONAL EXPERIENCE",
    title: "Quality Control & Operations",
    org: "Process-focused execution",
    copy: "Developed a detail-oriented approach to quality, standards, process monitoring and practical improvements that help teams deliver consistently.",
    icon: Zap,
    accent: "amber",
  },
  {
    year: "CURRENT DIRECTION",
    title: "Web Development Practitioner",
    org: "Learning by building",
    copy: "Growing technical skills through hands-on practice with web development, programming and modern digital experiences that connect technology with people.",
    icon: Terminal,
    accent: "emerald",
  },
];

type SkillCategory = "All" | "Technology" | "Events & Ops" | "Marketing & BD";

const skills: { name: string; category: Exclude<SkillCategory, "All">; detail: string }[] = [
  { name: "HTML & CSS", category: "Technology", detail: "Responsive interfaces" },
  { name: "JavaScript", category: "Technology", detail: "Programming foundations" },
  { name: "Web Development", category: "Technology", detail: "Digital product thinking" },
  { name: "Vendor Coordination", category: "Events & Ops", detail: "Reliable execution" },
  { name: "Logistics Planning", category: "Events & Ops", detail: "Moving parts, aligned" },
  { name: "Security Protocols", category: "Events & Ops", detail: "People-first safety" },
  { name: "Client Handling", category: "Marketing & BD", detail: "Clear communication" },
  { name: "Sales & Pitching", category: "Marketing & BD", detail: "Connecting value" },
  { name: "Team Leadership", category: "Marketing & BD", detail: "Shared ownership" },
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
  const [qualificationOpen, setQualificationOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const visibleSkills = skillCategory === "All" ? skills : skills.filter((skill) => skill.category === skillCategory);

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const subject = String(form.get("subject") ?? "Portfolio inquiry");
    const message = String(form.get("message") ?? "");
    setFormSent(true);
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
            <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">ATANU <span className="text-slate-500">/</span> PORTFOLIO</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation" data-testid="desktop-navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300" data-testid={`nav-link-${id}`}>{label}</a>
            ))}
          </nav>
          <a href={`mailto:${email}`} className="hidden items-center gap-2 rounded-full bg-sky-400 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-950 transition-transform hover:-translate-y-0.5 sm:flex" data-testid="nav-connect-cta">Let's connect <ArrowUpRight size={15} /></a>
          <Button variant="ghost" size="icon" className="text-slate-200 hover:bg-white/10 hover:text-sky-300 lg:hidden" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} data-testid="mobile-menu-toggle-button">
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <nav className="border-t border-white/[0.08] px-5 py-4 lg:hidden" aria-label="Mobile navigation" data-testid="mobile-navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)} className="block border-b border-white/[0.06] py-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-300 hover:text-sky-300" data-testid={`mobile-nav-link-${id}`}>{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-74px)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.06fr_.94fr] lg:px-8 lg:py-28" data-testid="hero-section">
          <div className="hero-reveal">
            <div className="mb-7 flex items-center gap-3" data-testid="hero-availability">
              <span className="live-dot h-2 w-2 rounded-full bg-emerald-300" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">Open to meaningful opportunities</span>
            </div>
            <p className="section-kicker" data-testid="hero-eyebrow">Technology × People × Execution</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.8rem]" data-testid="hero-title">Hi, I'm <span className="hero-gradient">Atanu Bhowmick</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl" data-testid="hero-role-badge">B.Tech Electrical Engineer with a hands-on edge in web development, marketing, events and operations.</p>
            <div className="mt-8 flex flex-wrap gap-2" data-testid="hero-pillar-list">
              {["Web development", "Event leadership", "Sales & BD", "Quality control"].map((item, index) => <Badge key={item} variant="outline" className={`rounded-full border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium ${index === 0 ? "text-sky-300" : "text-slate-400"}`} data-testid={`hero-pillar-${index + 1}`}>{item}</Badge>)}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3" data-testid="hero-actions">
              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:-translate-y-1 hover:bg-sky-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]" data-testid="hero-email-button">Connect via mail <ArrowUpRight size={16} /></a>
              <a href={linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.04]" data-testid="hero-linkedin-link"><Linkedin size={16} /> LinkedIn profile</a>
              <a href="#resumes" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-slate-400 transition-colors hover:text-sky-300" data-testid="hero-connect-cta">View resumes <ChevronRight size={16} /></a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-2 gap-5 border-t border-white/[0.08] pt-6 sm:grid-cols-3" data-testid="hero-facts">
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-one-value">4+</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-one-label">Working pillars</p></div>
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-two-value">360°</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-two-label">Ownership mindset</p></div>
              <div><p className="font-mono text-2xl font-bold text-white" data-testid="hero-fact-three-value">1</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500" data-testid="hero-fact-three-label">Curious learner</p></div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[33rem] hero-art" data-testid="hero-visual">
            <div className="absolute -inset-5 rounded-[2rem] border border-sky-400/10 bg-sky-400/[0.03] blur-sm" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-2 shadow-[0_0_70px_rgba(56,189,248,0.12)]">
              <div className="relative aspect-[0.92] overflow-hidden rounded-[1.05rem] bg-[#101b2d]">
                <img src={eventImage} alt="Blue-lit technology event stage with a live audience" className="h-full w-full object-cover opacity-75 mix-blend-screen" data-testid="hero-event-image" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-sky-400/10" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#090d16]/70 px-3 py-1.5 backdrop-blur-md" data-testid="hero-live-chip"><span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-300" /><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">On-ground / Online</span></div>
                <div className="absolute bottom-6 left-6 right-6" data-testid="hero-visual-caption"><p className="font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300">The operating principle</p><p className="mt-2 max-w-sm text-2xl font-semibold leading-tight text-white">Make the idea work in the real world.</p></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-white/10 bg-[#121e36]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8" data-testid="hero-stat-card"><p className="font-mono text-[10px] uppercase tracking-[0.17em] text-slate-500">Strength</p><p className="mt-1 text-lg font-semibold text-white">Calm under pressure</p><div className="mt-3 h-1 w-36 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[84%] rounded-full bg-gradient-to-r from-sky-400 to-indigo-300" /></div></div>
            <div className="absolute -right-3 top-16 rounded-lg border border-sky-400/20 bg-[#0f172a]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sky-300 backdrop-blur-xl sm:-right-8" data-testid="hero-tech-chip"><Sparkles size={13} className="mr-2 inline" /> Tech × Operations</div>
          </div>
        </section>

        <section id="about" className="section-shell" data-testid="about-section-container">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading id="about" overline="01 / WHO I AM" title="A builder with an operator's instinct." copy="I enjoy exploring different fields, learning by doing and taking responsibility. My edge is the space between a good idea and the detail required to make it happen." />
            <div className="grid gap-6 lg:grid-cols-12">
              <Card className="card-surface lg:col-span-7" data-testid="about-story-card"><CardContent className="p-6 sm:p-8 lg:p-10"><div className="flex items-start justify-between gap-5"><Quote className="text-sky-300" size={32} /><span className="font-mono text-xs text-slate-600">ATANU / 2024—NOW</span></div><p className="mt-8 text-xl leading-relaxed text-slate-200 sm:text-2xl" data-testid="about-story-copy">My B.Tech in Electrical Engineering gave me a structured way to think. College events taught me to work with people, logistics and real-time pressure. Professional roles in business development, sales and quality control taught me to listen, communicate and deliver with care.</p><p className="mt-6 leading-relaxed text-slate-400" data-testid="about-story-detail">Now I am bringing those lessons into technology — building my skills in web development and programming while staying curious about marketing, event management, operations and project coordination.</p></CardContent></Card>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5"><div className="card-surface flex min-h-[190px] flex-col justify-between" data-testid="about-engineering-card"><div className="flex items-center justify-between"><Code2 className="text-sky-300" size={24} /><span className="font-mono text-xs text-slate-600">MINDSET A</span></div><div><p className="text-lg font-semibold text-white" data-testid="about-engineering-title">Engineering mindset</p><p className="mt-2 text-sm leading-relaxed text-slate-400" data-testid="about-engineering-copy">Break the problem down, understand the system, improve the outcome.</p></div></div><div className="card-surface flex min-h-[190px] flex-col justify-between border-amber-300/20" data-testid="about-event-card"><div className="flex items-center justify-between"><BriefcaseBusiness className="text-amber-300" size={24} /><span className="font-mono text-xs text-slate-600">MINDSET B</span></div><div><p className="text-lg font-semibold text-white" data-testid="about-event-title">Event orchestration</p><p className="mt-2 text-sm leading-relaxed text-slate-400" data-testid="about-event-copy">Align people, timing and details so the experience feels effortless.</p></div></div></div>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-shell border-y border-white/[0.05] bg-[#0f172a]/30" data-testid="capabilities-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading id="capabilities" overline="02 / WHAT I BRING" title="Useful across the whole room." copy="A multidisciplinary toolkit for turning conversations, constraints and creative ideas into coordinated action." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{pillars.map(({ number, title, copy, icon: Icon, color }) => <Card key={number} className="card-surface group" data-testid={`capability-card-${number}`}><CardContent className="p-6"><div className="flex items-center justify-between"><span className="font-mono text-xs text-slate-600">{number}</span><Icon className={`${color} transition-transform duration-300 group-hover:scale-110`} size={24} /></div><h3 className="mt-14 text-xl font-semibold tracking-tight text-white" data-testid={`capability-title-${number}`}>{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400" data-testid={`capability-copy-${number}`}>{copy}</p><ArrowUpRight className="mt-8 text-slate-600 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-300" size={18} /></CardContent></Card>)}</div></div>
        </section>

        <section id="experience" className="section-shell" data-testid="experience-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading id="experience" overline="03 / EXPERIENCE" title="Built through responsibility." copy="Each chapter added a new way to contribute — from keeping people safe to keeping projects moving." /><div className="relative ml-3 border-l border-white/10 pl-8 sm:ml-8 sm:pl-12">{experiences.map(({ year, title, org, copy, icon: Icon, accent }, index) => <div key={title} className="relative mb-10 last:mb-0" data-testid={`timeline-item-${index + 1}`}><div className={`absolute -left-[43px] top-1 grid h-6 w-6 place-items-center rounded-full border border-${accent}-300/50 bg-[#090d16] text-${accent}-300 sm:-left-[61px]`}><Icon size={12} /></div><div className="grid gap-4 lg:grid-cols-[180px_1fr] lg:gap-10"><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sky-300" data-testid={`timeline-year-${index + 1}`}>{year}</p><p className="mt-2 text-xs text-slate-600" data-testid={`timeline-index-${index + 1}`}>0{index + 1} / 04</p></div><Card className="card-surface" data-testid={`timeline-card-${index + 1}`}><CardContent className="p-6 sm:p-7"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold text-white" data-testid={`timeline-title-${index + 1}`}>{title}</h3><span className="text-xs text-slate-500" data-testid={`timeline-org-${index + 1}`}>{org}</span></div><p className="mt-4 max-w-3xl leading-relaxed text-slate-400" data-testid={`timeline-copy-${index + 1}`}>{copy}</p></CardContent></Card></div></div>)}</div></div>
        </section>

        <section id="qualifications" className="section-shell border-y border-white/[0.05] bg-[#0f172a]/30" data-testid="qualifications-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading id="qualifications" overline="04 / QUALIFICATIONS" title="The foundation behind the range." copy="Formal engineering training, strengthened by practical experiences and a steady habit of self-directed learning." /><div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr]"><Card className="card-surface overflow-hidden" data-testid="qualification-card"><CardContent className="relative p-7 sm:p-9"><div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" /><div className="relative"><div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><BriefcaseBusiness size={22} /></span><span className="font-mono text-xs text-slate-600">EDUCATION / 01</span></div><p className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-sky-300" data-testid="qualification-overline">B.Tech Graduate</p><h3 className="mt-2 text-2xl font-semibold text-white" data-testid="qualification-title">Electrical Engineering</h3><p className="mt-4 leading-relaxed text-slate-400" data-testid="qualification-copy">A systems-thinking foundation that keeps me curious about how things work — from circuits and processes to software and people.</p><Button className="mt-8 border border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/10 hover:text-white" variant="outline" onClick={() => setQualificationOpen(true)} data-testid="qualifications-modal-trigger">View detailed profile <ArrowUpRight size={15} /></Button></div></CardContent></Card><div className="card-surface" data-testid="skills-matrix"><div className="flex flex-col gap-5 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">Skills matrix</p><h3 className="mt-2 text-xl font-semibold text-white" data-testid="skills-matrix-title">Capabilities in motion</h3></div><div className="flex flex-wrap gap-2" role="group" aria-label="Filter skills" data-testid="skills-filter-group">{(["All", "Technology", "Events & Ops", "Marketing & BD"] as SkillCategory[]).map((category) => <button key={category} onClick={() => setSkillCategory(category)} className={`rounded-full border px-3 py-1.5 text-xs transition-all ${skillCategory === category ? "border-sky-400/50 bg-sky-400/10 text-sky-300" : "border-white/10 text-slate-500 hover:border-white/25 hover:text-slate-300"}`} aria-pressed={skillCategory === category} data-testid={`skills-filter-${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>{category}</button>)}</div></div><div className="grid gap-3 pt-6 sm:grid-cols-2">{visibleSkills.map((skill) => <div key={skill.name} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-sky-400/30" data-testid={`skill-item-${skill.name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}><div className="flex items-center justify-between gap-3"><span className="font-medium text-slate-200" data-testid={`skill-name-${skill.name}`}>{skill.name}</span><Check className="text-emerald-300" size={15} /></div><p className="mt-1 text-xs text-slate-500" data-testid={`skill-detail-${skill.name}`}>{skill.detail}</p></div>)}</div></div></div></div>
        </section>

        <section id="resumes" className="section-shell" data-testid="resumes-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading id="resumes" overline="05 / SPECIALIZED TRACKS" title="Two ways to work together." copy="Choose the path that matches your immediate need. Both reflect the same ownership, communication and learning mindset." /><div className="grid gap-6 md:grid-cols-2"><Card className="card-surface group border-sky-400/20" data-testid="resume-software-card"><CardContent className="p-7 sm:p-9"><div className="flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-400/10 text-sky-300"><Terminal size={22} /></div><span className="font-mono text-xs text-sky-300">TRACK / 01</span></div><h3 className="mt-10 text-2xl font-semibold text-white" data-testid="resume-software-title">Software & web development</h3><p className="mt-4 leading-relaxed text-slate-400" data-testid="resume-software-copy">For teams looking for a curious engineering graduate developing practical skills across web interfaces, programming and digital products.</p><div className="mt-8 flex flex-wrap gap-2"><Badge variant="outline" className="border-white/10 text-slate-400">Web development</Badge><Badge variant="outline" className="border-white/10 text-slate-400">Programming</Badge><Badge variant="outline" className="border-white/10 text-slate-400">Problem solving</Badge></div><a href="/developer-resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-white" data-testid="resume-software-developer-button">Request developer resume <Download size={16} /></a></CardContent></Card><Card className="card-surface group border-amber-300/20" data-testid="resume-event-card"><CardContent className="p-7 sm:p-9"><div className="flex items-center justify-between"><div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-300/10 text-amber-300"><BriefcaseBusiness size={22} /></div><span className="font-mono text-xs text-amber-300">TRACK / 02</span></div><h3 className="mt-10 text-2xl font-semibold text-white" data-testid="resume-event-title">Event management & operations</h3><p className="mt-4 leading-relaxed text-slate-400" data-testid="resume-event-copy">For event teams that need dependable coordination across logistics, security, vendors, artists, teams and fast-moving decisions.</p><div className="mt-8 flex flex-wrap gap-2"><Badge variant="outline" className="border-white/10 text-slate-400">Logistics</Badge><Badge variant="outline" className="border-white/10 text-slate-400">Team coordination</Badge><Badge variant="outline" className="border-white/10 text-slate-400">Live execution</Badge></div><a href={`mailto:${email}?subject=Request%20-%20Event%20Management%20Resume`} className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-white" data-testid="resume-event-management-button">Request event resume <Download size={16} /></a></CardContent></Card></div></div>
        </section>

        <section id="contact" className="section-shell pb-24" data-testid="contact-section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="relative overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-gradient-to-br from-sky-400/[0.11] via-[#121e36] to-indigo-500/[0.08] p-6 shadow-[0_0_70px_rgba(56,189,248,0.08)] sm:p-10 lg:p-14"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-sky-400/10 blur-[100px]" /><div className="relative grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="section-kicker" data-testid="contact-overline">06 / LET'S CONNECT</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl" data-testid="contact-title">Have an idea worth making real?</h2><p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg" data-testid="contact-copy">Tell me what you are building, organizing or improving. I would love to understand the challenge and see where I can contribute.</p><div className="mt-8 space-y-4"><button onClick={() => copyToClipboard(email, "Email")} className="flex items-center gap-3 text-left text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-email-copy-button"><span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Mail size={16} /></span>{email}<Clipboard size={14} className="text-slate-600" /></button><a href={`tel:${phone.replaceAll(" ", "")}`} className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-phone-link"><span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Phone size={16} /></span>{phone}</a><a href={linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="contact-linkedin-button"><span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-300"><Linkedin size={16} /></span>Connect on LinkedIn <ExternalLink size={14} /></a></div></div><form onSubmit={handleInquiry} className="rounded-2xl border border-white/10 bg-[#090d16]/50 p-5 backdrop-blur-md sm:p-7" data-testid="contact-inquiry-form"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-medium uppercase tracking-[0.13em] text-slate-500" data-testid="contact-name-label">Your name<input name="name" required placeholder="Atanu's next collaborator" className="form-input mt-2" data-testid="contact-name-input" /></label><label className="text-xs font-medium uppercase tracking-[0.13em] text-slate-500" data-testid="contact-email-label">Your email<input name="senderEmail" type="email" required placeholder="you@example.com" className="form-input mt-2" data-testid="contact-sender-email-input" /></label></div><label className="mt-4 block text-xs font-medium uppercase tracking-[0.13em] text-slate-500" data-testid="contact-subject-label">Subject<input name="subject" required placeholder="Let's work together" className="form-input mt-2" data-testid="contact-subject-input" /></label><label className="mt-4 block text-xs font-medium uppercase tracking-[0.13em] text-slate-500" data-testid="contact-message-label">Message<textarea name="message" required rows={4} placeholder="What are you working on?" className="form-input mt-2 resize-none" data-testid="contact-message-input" /></label><div className="mt-5 flex flex-wrap items-center justify-between gap-4"><p className="text-xs text-slate-500" data-testid="contact-form-note">This opens your email app — no form data is stored.</p><Button type="submit" className="bg-sky-400 font-bold text-slate-950 hover:bg-sky-300" data-testid="contact-inquiry-form-submit">{formSent ? "Draft ready" : "Prepare email"} <ArrowUpRight size={15} /></Button></div></form></div></div></div>
        </section>
      </main>

      {qualificationOpen && <div className="fixed inset-0 z-[60] grid place-items-center bg-[#03050a]/80 p-5 backdrop-blur-sm" role="presentation" onMouseDown={() => setQualificationOpen(false)} data-testid="qualifications-modal-overlay"><div role="dialog" aria-modal="true" aria-labelledby="qualification-dialog-title" className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-white/10 bg-[#101a2e] p-6 shadow-2xl sm:p-9" onMouseDown={(event) => event.stopPropagation()} data-testid="qualifications-modal"><button className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 hover:bg-white/10 hover:text-white" onClick={() => setQualificationOpen(false)} aria-label="Close qualifications" data-testid="qualifications-modal-close"><X size={18} /></button><p className="section-kicker">Detailed profile</p><h2 id="qualification-dialog-title" className="mt-3 text-3xl font-bold text-white" data-testid="qualifications-modal-title">A foundation built for range.</h2><p className="mt-4 leading-relaxed text-slate-400" data-testid="qualifications-modal-copy">Electrical engineering trained me to observe systems, ask precise questions and keep improving the signal. Work and event leadership taught me to apply that thinking with people and under real constraints.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Systems thinking", "Process discipline", "Team leadership", "Client communication", "Vendor coordination", "Learning by doing"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-sm text-slate-200" data-testid={`qualification-detail-${item.toLowerCase().replaceAll(" ", "-")}`}><Check size={15} className="text-emerald-300" />{item}</div>)}</div></div></div>}

      <footer className="border-t border-white/[0.08]" data-testid="site-footer"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p className="font-mono text-xs text-slate-600" data-testid="footer-copyright">© 2024 Atanu Bhowmick. Built with curiosity.</p><div className="flex items-center gap-5"><a href="#top" className="text-xs uppercase tracking-[0.16em] text-slate-500 hover:text-sky-300" data-testid="footer-back-to-top">Back to top <ArrowUpRight className="ml-1 inline" size={13} /></a><a href={linkedIn} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" data-testid="footer-linkedin-link"><Linkedin size={17} /></a></div></div></footer>
      <Toaster richColors />
    </div>
  );
}
