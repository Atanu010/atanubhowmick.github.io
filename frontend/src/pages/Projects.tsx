import {
  Brain,
  CheckCircle,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Linkedin,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "realtime-analytics",
    title: "Real-Time Analytics Platform",
    category: "Data Engineering",
    status: "Production",
    description: "High-throughput event processing platform ingesting 1M+ events/second from Kafka, processing with Spark Structured Streaming, and serving sub-second analytical queries via ClickHouse. Features exactly-once semantics, dynamic scaling, and comprehensive observability.",
    longDescription: `
      Built a complete real-time analytics stack for a fintech use case requiring sub-second dashboard updates on transaction data. The pipeline handles schema evolution, late-arriving events, and backpressure gracefully.

      **Architecture Highlights:**
      - **Ingestion**: Kafka with Avro schemas (Schema Registry) for type-safe event contracts
      - **Processing**: Spark Structured Streaming with watermarking for late events, stateful aggregations using mapGroupsWithState
      - **Storage**: ClickHouse for OLAP queries with MergeTree engine, partitioned by time and sharded by tenant
      - **Orchestration**: Airflow DAGs for batch backfills, schema migrations, and compaction jobs
      - **Observability**: Prometheus metrics exported from Spark, Grafana dashboards for throughput/latency/error rates, alerting on SLA breaches

      **Key Challenges Solved:**
      - Achieved exactly-once processing with Kafka transactions + idempotent ClickHouse writes
      - Handled 10x traffic spikes during peak hours with K8s HPA on Spark executors
      - Implemented schema evolution strategy (backward/forward compatibility) with automated validation
    `,
    techStack: ["Apache Kafka", "Apache Spark", "ClickHouse", "Apache Airflow", "Docker", "Kubernetes", "Prometheus", "Grafana", "Avro", "Schema Registry"],
    githubUrl: "https://github.com/atanubhowmick/realtime-analytics-platform",
    demoUrl: null,
    highlights: ["1M+ events/sec", "Sub-second latency", "Exactly-once semantics", "Auto-scaling"],
    icon: Zap,
    color: "amber",
  },
  {
    id: "feature-store",
    title: "ML Feature Store & Pipeline",
    category: "Data Engineering",
    status: "Production",
    description: "Centralized feature store built with Feast, providing point-in-time correct feature retrieval, automated feature engineering pipelines, and data quality validation. Serves features to both training and inference pipelines with consistent APIs.",
    longDescription: `
      Designed and implemented a feature store to eliminate feature drift between training and serving, reduce feature engineering duplication, and enable rapid experimentation.

      **Core Components:**
      - **Feature Registry**: Feast with PostgreSQL registry and Redis online store for low-latency serving
      - **Feature Engineering**: dbt models for SQL-based transformations, Python UDFs for complex logic
      - **Pipeline Orchestration**: Airflow DAGs for daily/hourly feature computation with incremental processing
      - **Data Quality**: Great Expectations suites validating feature distributions, null rates, drift detection
      - **Point-in-Time Correctness**: Feast's native PIT joins prevent data leakage in training

      **Innovation:**
      - Built a feature discovery UI for data scientists to browse, document, and request features
      - Automated feature backfill pipeline with configurable time ranges
      - Integrated with MLflow for experiment tracking linked to feature versions
    `,
    techStack: ["Feast", "Apache Airflow", "dbt", "PostgreSQL", "Redis", "Great Expectations", "Python", "MLflow", "Docker"],
    githubUrl: "https://github.com/atanubhowmick/ml-feature-store",
    demoUrl: null,
    highlights: ["Point-in-time correctness", "Online/offline parity", "Automated quality checks", "Feature discovery UI"],
    icon: Database,
    color: "sky",
  },
  {
    id: "llm-rag-pipeline",
    title: "LLM RAG Pipeline for Documentation",
    category: "AI/ML",
    status: "Production",
    description: "Production-ready Retrieval-Augmented Generation system for technical documentation with hybrid search, reranking, citation tracking, and automated evaluation against hallucination benchmarks.",
    longDescription: `
      Built an enterprise-grade RAG system to answer technical questions from internal documentation, reducing support ticket volume by 40%.

      **Pipeline Stages:**
      - **Ingestion**: Recursive chunking with metadata preservation (section, version, last_updated)
      - **Embedding**: Mixed embedding strategy (dense: text-embedding-3-large, sparse: BM25) for hybrid retrieval
      - **Vector Store**: Pinecone with namespace isolation per product/version
      - **Retrieval**: Hybrid search (dense + sparse) with reciprocal rank fusion, followed by Cohere rerank
      - **Generation**: GPT-4 with structured prompts enforcing citation format and uncertainty expressions
      - **Evaluation**: Automated nightly eval with RAGAS metrics (faithfulness, answer_relevancy, context_precision)

      **Guardrails:**
      - Hallucination detection via self-consistency checking
      - PII redaction before sending to LLM
      - Rate limiting and cost controls per user/team
      - Fallback to keyword search when confidence low
    `,
    techStack: ["LangChain", "Pinecone", "OpenAI", "Cohere", "FastAPI", "LangSmith", "RAGAS", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/atanubhowmick/llm-rag-pipeline",
    demoUrl: "https://rag-demo.atanubhowmick.dev",
    highlights: ["Hybrid search + rerank", "RAGAS evaluation", "Citation tracking", "Hallucination guardrails"],
    icon: Brain,
    color: "indigo",
  },
  {
    id: "data-quality-observatory",
    title: "Data Quality Observatory",
    category: "Data Engineering",
    status: "Production",
    description: "Automated data quality monitoring platform with Soda Core, detecting anomalies, schema changes, and freshness violations. Integrated with Airflow for lineage-aware alerting and Slack/PagerDuty notifications.",
    longDescription: `
      Implemented a comprehensive data observability layer catching data issues before they reach dashboards or ML models.

      **Monitoring Coverage:**
      - **Freshness**: SLA-based freshness checks with configurable thresholds per dataset
      - **Volume**: Row count anomaly detection using statistical models (isolation forest)
      - **Schema**: Automated schema drift detection with breaking change classification
      - **Quality**: Custom Soda checks for business rules (referential integrity, value ranges, uniqueness)
      - **Lineage**: Column-level lineage from dbt + Airflow parsed into graph for impact analysis

      **Alerting & Resolution:**
      - Tiered alerting: Warning (Slack) → Critical (PagerDuty) → Auto-quarantine (Airflow task failure)
      - Auto-generated incident runbooks with affected downstream dashboards/models
      - Historical trend analysis for recurring issues
    `,
    techStack: ["Soda Core", "Apache Airflow", "dbt", "Slack API", "PagerDuty", "Grafana", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/atanubhowmick/data-quality-observatory",
    demoUrl: null,
    highlights: ["Multi-dimensional checks", "Lineage-aware alerts", "Auto-quarantine", "Incident runbooks"],
    icon: CheckCircle,
    color: "emerald",
  },
  {
    id: "kubernetes-ml-platform",
    title: "Kubernetes ML Platform",
    category: "AI/ML",
    status: "In Progress",
    description: "End-to-end ML platform on Kubernetes with Kubeflow Pipelines, KServe for model serving, MLflow for experiment tracking, and ArgoCD for GitOps deployment. Supports A/B testing, canary deployments, and automated rollback on metric regression.",
    longDescription: `
      Building a self-service ML platform enabling data scientists to train, deploy, and monitor models without infrastructure expertise.

      **Platform Capabilities:**
      - **Pipeline Orchestration**: Kubeflow Pipelines with custom components for data validation, training, evaluation
      - **Experiment Tracking**: MLflow integrated with Kubeflow, auto-logging parameters/metrics/artifacts
      - **Model Registry**: Versioned models with stage transitions (Staging → Production) and approval gates
      - **Serving**: KServe with InferenceService CRDs, autoscaling (KPA/HPA), request batching
      - **Deployment**: ArgoCD GitOps with progressive delivery (canary, blue-green) via Argo Rollouts
      - **Monitoring**: Prometheus metrics from KServe, custom dashboards for latency/throughput/drift

      **GitOps Workflow:**
      - Model promotion via PR updating Helm values in git
      - Automated canary analysis with Kayenta (metric comparison)
      - Rollback on SLO breach (error rate, latency p99, prediction drift)
    `,
    techStack: ["Kubeflow", "KServe", "ArgoCD", "Argo Rollouts", "MLflow", "Prometheus", "Grafana", "Kubernetes", "Helm", "Python"],
    githubUrl: "https://github.com/atanubhowmick/k8s-ml-platform",
    demoUrl: null,
    highlights: ["GitOps deployment", "Canary analysis", "Autoscaling serving", "MLflow integration"],
    icon: Server,
    color: "indigo",
  },
  {
    id: "streaming-etl-flink",
    title: "Streaming ETL with Flink & Iceberg",
    category: "Data Engineering",
    status: "Production",
    description: "Exactly-once streaming ETL pipeline processing CDC events from Debezium/Kafka into Apache Iceberg tables. Handles schema evolution, late-arriving data, and provides time-travel queries for audit and reprocessing.",
    longDescription: `
      Built a modern streaming data lake foundation replacing batch ETL with real-time ingestion for a retail analytics platform.

      **Key Features:**
      - **CDC Ingestion**: Debezium connectors for MySQL/PostgreSQL → Kafka with Avro schemas
      - **Stream Processing**: Flink SQL for transformations, deduplication, and enrichment joins
      - **Sink**: Apache Iceberg tables on S3 with partition evolution and hidden partitioning
      - **Schema Evolution**: Automated schema migration with Flink's schema registry integration
      - **Late Data Handling**: Watermark strategies with allowed lateness, side outputs for late events
      - **Time Travel**: Iceberg snapshots for point-in-time queries and incremental reprocessing

      **Operational Excellence:**
      - Savepoint-based upgrades for zero-downtime Flink job updates
      - Automated compaction and snapshot expiration policies
      - Data quality checks embedded in Flink job (completeness, validity)
      - Cost optimization via S3 Intelligent Tiering and Iceberg partition pruning
    `,
    techStack: ["Apache Flink", "Apache Kafka", "Apache Iceberg", "Debezium", "Schema Registry", "AWS S3", "Docker", "Kubernetes", "Prometheus"],
    githubUrl: "https://github.com/atanubhowmick/flink-iceberg-cdc",
    demoUrl: null,
    highlights: ["Exactly-once CDC", "Schema evolution", "Iceberg time travel", "Zero-downtime upgrades"],
    icon: GitBranch,
    color: "sky",
  },
];

export default function Projects() {
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
            <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">ATANU <span className="text-slate-500">/</span> PROJECTS</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="/" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Home</a>
            <a href="#skills" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Skills</a>
            <a href="#contact" className="nav-link text-xs font-medium uppercase tracking-[0.16em] text-slate-400 hover:text-sky-300">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="https://github.com/atanubhowmick" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="GitHub"><GitBranch size={18} /></a>
            <a href="https://www.linkedin.com/in/atanu-bhowmick-a077aa283" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-300" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 max-w-3xl">
            <p className="section-kicker">01 / PROJECT PORTFOLIO</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">End-to-End Data & AI Systems</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Production-grade projects spanning real-time analytics, ML feature stores, LLM applications, data quality observability, and Kubernetes ML platforms. Each project includes architecture docs, code, and deployment guides.</p>
          </div>

          <Tabs defaultValue="all" className="w-full" data-testid="projects-tabs">
            <TabsList className="mb-10 grid w-full grid-cols-3" aria-label="Project categories">
              <TabsTrigger value="all" className="data-[state=active]:bg-sky-400 data-[state=active]:text-slate-950">All Projects</TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-sky-400 data-[state=active]:text-slate-950">Data Engineering</TabsTrigger>
              <TabsTrigger value="ai" className="data-[state=active]:bg-sky-400 data-[state=active]:text-slate-950">AI/ML</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8" data-testid="projects-all">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </TabsContent>

            <TabsContent value="data" className="space-y-8" data-testid="projects-data">
              {projects.filter((p) => p.category === "Data Engineering").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </TabsContent>

            <TabsContent value="ai" className="space-y-8" data-testid="projects-ai">
              {projects.filter((p) => p.category === "AI/ML").map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="font-mono text-xs text-slate-600">© 2024 Atanu Bhowmick. Built with data & curiosity.</p>
          <div className="flex items-center gap-5">
            <a href="https://github.com/atanubhowmick" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" aria-label="GitHub"><GitBranch size={17} /></a>
            <a href="https://www.linkedin.com/in/atanu-bhowmick-a077aa283" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-300" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const statusColors = {
    Production: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
    "In Progress": "bg-amber-400/10 text-amber-300 border-amber-400/20",
    Archived: "bg-slate-400/10 text-slate-400 border-slate-400/20",
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/50 p-6 sm:p-8 transition-all hover:border-sky-400/20 hover:bg-[#121e36]/50" data-testid={`project-card-${project.id}`}>
      <div className="absolute right-6 top-6">
        <Badge variant="outline" className={statusColors[project.status as keyof typeof statusColors] || statusColors.Production} data-testid={`project-status-${project.id}`}>
          {project.status}
        </Badge>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div className={`flex-shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-${project.color}-400/10 text-${project.color}-300`}>
              <project.icon size={24} />
            </div>
            <div>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-[0.1em]">{project.category}</p>
              <h2 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors" data-testid={`project-title-${project.id}`}>{project.title}</h2>
            </div>
          </div>
          <p className="mt-4 text-base leading-relaxed text-slate-300" data-testid={`project-description-${project.id}`}>{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5" data-testid={`project-tags-${project.id}`}>
            {project.techStack.slice(0, 8).map((tech) => (
              <Badge key={tech} variant="outline" className="border-white/10 bg-white/[0.03] text-slate-400 hover:text-sky-300 hover:border-sky-400/30 text-[10px]">{tech}</Badge>
            ))}
            {project.techStack.length > 8 && (
              <Badge variant="outline" className="border-white/10 bg-white/[0.03] text-slate-500 text-[10px]">+{project.techStack.length - 8} more</Badge>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3" data-testid={`project-links-${project.id}`}>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-white transition-colors">
              <Code2 size={14} /> View Code
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-sky-300 transition-colors">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-sky-300" onClick={() => toggleDetails(project.id)}>
              <Sparkles size={14} /> Details
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0 w-48 h-48 sm:w-64 sm:h-64 rounded-xl bg-gradient-to-br from-{project.color}-400/10 to-transparent border border-{project.color}-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <project.icon className={`text-${project.color}-300`} size={48} />
        </div>
      </div>

      <div id={`project-details-${project.id}`} className="hidden mt-8 overflow-hidden transition-all" data-testid={`project-details-${project.id}`}>
        <div className="pt-6 border-t border-white/10">
          <div className="prose prose-invert max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: project.longDescription.trim().split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('') }} />
          <div className="mt-6 flex flex-wrap gap-2" data-testid={`project-highlights-${project.id}`}>
            {project.highlights.map((highlight) => (
              <Badge key={highlight} variant="outline" className="border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-[10px]">
                <CheckCircle size={10} className="mr-1" /> {highlight}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function toggleDetails(projectId: string) {
  const el = document.getElementById(`project-details-${projectId}`);
  if (el) {
    el.classList.toggle("hidden");
  }
}