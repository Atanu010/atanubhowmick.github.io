import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  Github,
  GitBranch,
  Server,
  Star,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Skill = {
  name: string;
  proficiency: number;
  experience: string;
  detail: string;
  projects: string[];
};

const skillCategories = [
  {
    id: "data-engineering",
    label: "Data Engineering",
    icon: Database,
    color: "sky",
    description: "Building scalable, reliable data platforms — from ingestion to serving.",
    skills: [
      { name: "Apache Spark", proficiency: 85, experience: "3+ years", detail: "Structured Streaming, batch ETL, Delta Lake, performance tuning, Catalyst optimizer", projects: ["Real-Time Analytics", "Feature Store Pipeline"] },
      { name: "Apache Kafka", proficiency: 80, experience: "2+ years", detail: "Cluster ops, Kafka Streams, Schema Registry, exactly-once, Connect, KRaft mode", projects: ["Real-Time Analytics", "CDC Pipeline"] },
      { name: "Apache Airflow", proficiency: 85, experience: "3+ years", detail: "Dynamic DAGs, TaskFlow API, XCom, sensors, providers, K8s executor, Dagster eval", projects: ["Feature Store", "Data Quality", "ML Platform"] },
      { name: "Apache Flink", proficiency: 70, experience: "1+ year", detail: "Flink SQL, Table API, state backends, checkpoints, savepoints, Iceberg sink", projects: ["Streaming CDC ETL"] },
      { name: "dbt", proficiency: 80, experience: "2+ years", detail: "Models, tests, macros, packages, incremental strategies, contracts, mesh patterns", projects: ["Feature Store", "Data Quality"] },
      { name: "ClickHouse", proficiency: 75, experience: "1+ year", detail: "MergeTree engines, materialized views, sharding, replication, vector search", projects: ["Real-Time Analytics"] },
      { name: "Apache Iceberg", proficiency: 70, experience: "1+ year", detail: "Time travel, partition evolution, hidden partitioning, CDC ingestion, compaction", projects: ["Streaming CDC ETL"] },
      { name: "Snowflake / BigQuery", proficiency: 75, experience: "2+ years", detail: "Snowflake: virtual warehouses, streams/tasks, Snowpark. BigQuery: slots, BI Engine, ML", projects: ["Feature Store", "Analytics"] },
      { name: "Python (Pandas, Polars)", proficiency: 90, experience: "4+ years", detail: "DataFrames, Polars lazy API, PyArrow, NumPy, performance optimization, type hints", projects: ["All projects"] },
      { name: "SQL / NoSQL", proficiency: 85, experience: "4+ years", detail: "PostgreSQL, MySQL, Redis, Cassandra, MongoDB — indexing, query plans, data modeling", projects: ["All projects"] },
      { name: "Soda Core / Great Expectations", proficiency: 75, experience: "1+ year", detail: "Data contracts, profiling, anomaly detection, checkpoint integration, custom metrics", projects: ["Data Quality Observatory"] },
      { name: "Feast", proficiency: 70, experience: "1+ year", detail: "Feature registry, online/offline stores, PIT joins, materialization, entity/feature views", projects: ["ML Feature Store"] },
    ],
  },
  {
    id: "ai-ml",
    label: "AI/ML Engineering",
    icon: Brain,
    color: "indigo",
    description: "Designing, training, deploying, and monitoring ML systems at scale.",
    skills: [
      { name: "PyTorch", proficiency: 80, experience: "2+ years", detail: "nn.Module, autograd, DataLoader, DDP/FSDP, TorchScript, ONNX export, TorchServe", projects: ["LLM RAG", "ML Platform"] },
      { name: "TensorFlow / Keras", proficiency: 70, experience: "2+ years", detail: "Keras functional API, TF Data, SavedModel, TF Serving, TFLite, TFX components", projects: ["Certifications", "Experiments"] },
      { name: "Hugging Face Transformers", proficiency: 80, experience: "2+ years", detail: "AutoModel, Trainer, PEFT/LoRA, quantization (bitsandbytes), Accelerate, model cards", projects: ["LLM RAG", "Fine-tuning"] },
      { name: "LangChain / LlamaIndex", proficiency: 70, experience: "1+ year", detail: "Chains, agents, RAG pipelines, vector stores, evaluation, LangGraph, LangSmith", projects: ["LLM RAG Pipeline"] },
      { name: "MLflow", proficiency: 80, experience: "2+ years", detail: "Tracking, projects, models, registry, autolog, model signing, artifacts, UI", projects: ["ML Platform", "Feature Store"] },
      { name: "Kubeflow / KServe", proficiency: 70, experience: "1+ year", detail: "Pipelines, Katib, KServe InferenceService, ModelMesh, Knative serving, autoscaling", projects: ["K8s ML Platform"] },
      { name: "Model Serving (Triton, BentoML)", proficiency: 70, experience: "1+ year", detail: "Triton model repo, ensemble, dynamic batching. BentoML: services, runners, Yatai", projects: ["ML Platform", "Serving"] },
      { name: "Vector Databases", proficiency: 75, experience: "1+ year", detail: "Pinecone, Weaviate, Qdrant, Milvus — HNSW, IVF, hybrid search, filtering, multi-tenancy", projects: ["LLM RAG Pipeline"] },
      { name: "RAGAS / Evaluation", proficiency: 65, experience: "1+ year", detail: "Faithfulness, answer_relevancy, context_precision/recall, custom metrics, CI integration", projects: ["LLM RAG Pipeline"] },
      { name: "MLOps Practices", proficiency: 80, experience: "2+ years", detail: "CI/CD for ML, data versioning (DVC), feature stores, drift detection, A/B testing, shadow deploy", projects: ["ML Platform", "Feature Store"] },
    ],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    icon: Server,
    color: "amber",
    description: "Infrastructure, deployment, and operations for data & AI workloads.",
    skills: [
      { name: "AWS", proficiency: 80, experience: "3+ years", detail: "EC2, ECS/EKS, Lambda, S3, Glue, EMR, Redshift, Kinesis, MSK, Step Functions, IAM", projects: ["Real-Time Analytics", "ML Platform"] },
      { name: "GCP", proficiency: 75, experience: "2+ years", detail: "Cloud Run, Dataflow, BigQuery, Pub/Sub, Vertex AI, Composer, Artifact Registry, IAM", projects: ["Feature Store", "Certifications"] },
      { name: "Kubernetes", proficiency: 80, experience: "3+ years", detail: "EKS/GKE, Helm, Kustomize, Operators, CRDs, HPA/VPA, Cluster Autoscaler, CNI/CSI", projects: ["ML Platform", "All projects"] },
      { name: "Docker / Containerd", proficiency: 85, experience: "4+ years", detail: "Multi-stage builds, BuildKit, distroless, security scanning, compose, dev containers", projects: ["All projects"] },
      { name: "Terraform", proficiency: 75, experience: "2+ years", detail: "Modules, workspaces, state backend, providers, testing (terratest), drift detection", projects: ["ML Platform", "Infra"] },
      { name: "GitHub Actions", proficiency: 80, experience: "3+ years", detail: "Workflows, reusable workflows, matrix, environments, OIDC, self-hosted runners, caching", projects: ["All projects"] },
      { name: "ArgoCD / Argo Rollouts", proficiency: 70, experience: "1+ year", detail: "App of Apps, sync waves, health checks, progressive delivery, analysis templates, Kayenta", projects: ["K8s ML Platform"] },
      { name: "Prometheus / Grafana", proficiency: 70, experience: "2+ years", detail: "PromQL, Alertmanager, rules, recording rules, Grafana dashboards, Loki, Tempo", projects: ["Real-Time Analytics", "ML Platform"] },
      { name: "CI/CD for Data/ML", proficiency: 75, experience: "2+ years", detail: "dbt CI, Great Expectations in CI, model validation gates, contract testing, data diffs", projects: ["Feature Store", "Data Quality"] },
      { name: "GitOps / Infra as Code", proficiency: 75, experience: "2+ years", detail: "Flux, ArgoCD, Helm charts, Kustomize, policy (OPA/Gatekeeper), secrets (SOPS/SealedSecrets)", projects: ["ML Platform", "Infra"] },
    ],
  },
  {
    id: "software",
    label: "Software Engineering",
    icon: Code2,
    color: "emerald",
    description: "Clean architecture, APIs, and full-stack development for production systems.",
    skills: [
      { name: "FastAPI / Starlette", proficiency: 85, experience: "3+ years", detail: "Dependency injection, Pydantic v2, async, OpenAPI, middleware, testing, GraphQL (Strawberry)", projects: ["LLM RAG API", "Feature Store API"] },
      { name: "Go", proficiency: 70, experience: "1+ year", detail: "Concurrency, channels, generics, testing, modules, pprof, gRPC, ConnectRPC", projects: ["High-throughput services"] },
      { name: "React / TypeScript", proficiency: 85, experience: "3+ years", detail: "Hooks, Suspense, Server Components, TanStack Query, Zustand, testing (Vitest/RTL)", projects: ["This Portfolio", "Feature Store UI"] },
      { name: "PostgreSQL / Redis", proficiency: 80, experience: "4+ years", detail: "PG: indexing, partitioning, CTEs, JSONB, advisory locks. Redis: streams, Lua, Cluster", projects: ["Feature Store", "ML Platform"] },
      { name: "gRPC / Protocol Buffers", proficiency: 70, experience: "1+ year", detail: "Proto3, unary/streaming, interceptors, reflection, grpc-gateway, ConnectRPC", projects: ["ML Platform services"] },
      { name: "Testing (Pytest, Vitest, Playwright)", proficiency: 85, experience: "3+ years", detail: "Unit, integration, contract, e2e, property-based, mutation, coverage, CI integration", projects: ["All projects"] },
      { name: "Design Patterns / Architecture", proficiency: 80, experience: "4+ years", detail: "Clean/Hexagonal, DDD, CQRS, Event Sourcing, SOLID, modular monoliths, microservices tradeoffs", projects: ["All projects"] },
      { name: "Git / Version Control", proficiency: 90, experience: "5+ years", detail: "Rebase, cherry-pick, bisect, worktrees, submodules, hooks, conventional commits, trunk-based", projects: ["All projects"] },
      { name: "Observability (Logging, Tracing)", proficiency: 75, experience: "2+ years", detail: "Structured logging (zerolog, slog), OpenTelemetry, Jaeger, correlation IDs, sampling", projects: ["ML Platform", "Services"] },
      { name: "Security Practices", proficiency: 70, experience: "2+ years", detail: "OAuth2/OIDC, JWT, mTLS, secrets management, vulnerability scanning, SBOM, supply chain", projects: ["ML Platform", "Infra"] },
    ],
  },
];

const certifications = [
  { name: "AWS Solutions Architect Associate", issuer: "Amazon Web Services", year: "2024", icon: Server, color: "amber" },
  { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud", year: "2024", icon: Database, color: "sky" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023", icon: Brain, color: "indigo" },
  { name: "Apache Kafka Certification (CCDAK)", issuer: "Confluent", year: "2023", icon: Zap, color: "amber" },
];

export default function TechnicalSkills() {
  return (
    <div className="portfolio-shell min-h-screen overflow-x-hidden bg-[#090d16] text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-40" aria-hidden="true">
        <div className="absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[40rem] h-[32rem] w-[32rem] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-sky-400/40 bg-sky-400/10 font-mono text-sm font-bold text-sky-300">AB</span>
            <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">ATANU <span className="text-slate-500">/</span> SKILLS</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="/" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Home</a>
            <a href="/projects" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Projects</a>
            <a href="#contact" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="https://github.com/atanubhowmick" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="GitHub"><GitBranch size={18} /></a>
            <a href="https://www.linkedin.com/in/atanu-bhowmick-a077aa283" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="LinkedIn"><Github size={18} /></a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">02 / TECHNICAL EXPERTISE</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Deep Skills Across the Stack</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Production-level proficiency across data engineering, ML engineering, cloud infrastructure, and software development. Each skill backed by real projects and certifications.</p>
          </div>

          <Tabs defaultValue="data-engineering" className="w-full" data-testid="skills-tabs">
            <TabsList className="mb-10 grid w-full grid-cols-4" aria-label="Skill categories">
              {skillCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="data-[state=active]:bg-sky-400 data-[state=active]:text-slate-950 gap-2">
                  <cat.icon className={`text-${cat.color}-300`} size={16} /> {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="space-y-6" data-testid={`skills-${cat.id}`}>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className={`flex-shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-${cat.color}-400/10 text-${cat.color}-300`}>
                    <cat.icon size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{cat.label}</h2>
                    <p className="mt-1 text-sm text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {cat.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} color={cat.color} />
                  ))}
                </div>
              </TabsContent>
            ))}

            <TabsContent value="certifications" className="space-y-6" data-testid="skills-certifications">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {certifications.map((cert) => (
                  <Card key={cert.name} className="card-surface group" data-testid={`cert-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className={`grid h-12 w-12 place-items-center rounded-xl bg-${cert.color}-400/10 text-${cert.color}-300`}>
                          <cert.icon size={24} />
                        </div>
                        <Star className="text-amber-400" size={20} />
                      </div>
                      <h3 className="mt-4 font-semibold text-white group-hover:text-sky-300 transition-colors" data-testid={`cert-title-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>{cert.name}</h3>
                      <p className="mt-1 text-sm text-slate-500" data-testid={`cert-issuer-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>{cert.issuer}</p>
                      <p className="mt-1 font-mono text-xs text-sky-300" data-testid={`cert-year-${cert.name.toLowerCase().replace(/\s+/g, "-")}`}>{cert.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 rounded-2xl border border-sky-400/20 bg-sky-400/5 p-8 text-center" data-testid="skills-cta-section">
            <h3 className="text-2xl font-bold text-white">Want to see these skills in action?</h3>
            <p className="mt-2 text-slate-400">Explore the projects where I've applied these technologies to solve real problems.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="/projects" className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-sky-300">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="https://github.com/atanubhowmick" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:border-sky-400/30">
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-mono text-xs text-slate-600">© 2024 Atanu Bhowmick. Built with data & curiosity.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/atanubhowmick" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href="https://www.linkedin.com/in/atanu-bhowmick-a077aa283" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" aria-label="LinkedIn"><Github size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ skill, color }: { skill: Skill; color: string }) {
  return (
    <Card className="card-surface group hover:border-white/10 transition-colors" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white group-hover:text-sky-300 transition-colors truncate" data-testid={`skill-name-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.name}</h3>
            <p className="mt-1 font-mono text-xs text-sky-300" data-testid={`skill-experience-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.experience}</p>
          </div>
          <div className={`flex-shrink-0 text-right font-mono text-lg font-bold text-${color}-300`} data-testid={`skill-proficiency-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
            {skill.proficiency}%
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-1.5 mb-3 overflow-hidden rounded-full bg-white/10" data-testid={`skill-bar-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
          <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-300 transition-all duration-1000" style={{ width: `${skill.proficiency}%` }} />
        </div>
        <p className="text-xs text-slate-400 mb-3 line-clamp-2" data-testid={`skill-detail-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>{skill.detail}</p>
        <div className="flex flex-wrap gap-1" data-testid={`skill-projects-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}>
          {skill.projects.slice(0, 2).map((project) => (
            <Badge key={project} variant="outline" className="border-white/10 bg-white/[0.03] text-slate-500 hover:text-sky-300 hover:border-sky-400/30 text-[9px] px-2 py-0.5">{project}</Badge>
          ))}
          {skill.projects.length > 2 && (
            <Badge variant="outline" className="border-white/10 bg-white/[0.03] text-slate-500 text-[9px] px-2 py-0.5">+{skill.projects.length - 2} more</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}