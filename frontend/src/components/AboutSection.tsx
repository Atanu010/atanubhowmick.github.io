import { ArrowDownRight, ArrowUpRight, CircuitBoard, Code2, Database, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const chapters = [
  {
    id: "background",
    title: "My Background",
    subtitle: "Engineering is my starting point—not something I’m leaving behind.",
    paragraphs: [
      "I’m an Electrical Engineering graduate from MAKAUT University, having studied at Future Institute of Engineering and Management (2022–2026). My background gave me exposure to electrical systems, electronics, industrial systems, sensors, IoT and monitoring systems. It also taught me to approach problems through engineering analysis: understand the system, examine the evidence and work out why something behaves the way it does.",
      "That way of thinking still shapes how I learn. I enjoy understanding how individual components work together, whether they are part of an electrical system or a software application. I see my engineering foundation as an advantage when exploring software, data and AI—especially when the problem involves something happening in the physical world.",
    ],
  },
  {
    id: "journey",
    title: "My Technical Journey",
    subtitle: "From understanding systems to building the software around them.",
    paragraphs: [
      "My interest in software grew out of wanting to turn ideas into working tools. I’m now building my career around full-stack development and data-driven technologies. This feels like an evolution of my engineering interests rather than a sudden change of direction: software gives me another way to investigate problems and create useful solutions.",
      "In full-stack development, I’m developing my skills with HTML, CSS, JavaScript and React, alongside backend development with Java, Spring Boot, REST APIs and SQL. I use Git and GitHub as part of this learning process. My focus is on connecting these pieces into functional applications—not just learning each technology in isolation. My CV also includes an industrial internship certification in full-stack development using Java, Spring and Spring Boot.",
      "I’m currently developing my Python and Data Analytics capabilities, including Pandas, NumPy, SQL, data cleaning, Exploratory Data Analysis, data visualization, business analytics and statistical analysis. I’m building practical experience through projects because I want to understand how raw data can become useful information and support better business decisions.",
      "I’m also actively learning about Artificial Intelligence, Machine Learning, predictive analytics and AI agents. I’m interested in AI-powered applications and natural-language data analysis: how someone could ask a question about their data and receive a useful, understandable answer. I want to explore AI inside practical software products, rather than treat it only as a theoretical subject.",
    ],
  },
  {
    id: "building",
    title: "What I’m Building",
    subtitle: "Practical problems give my learning a purpose.",
    paragraphs: [
      "I prefer projects that resemble real industry problems, where the interface, backend, data and user needs have to fit together. My interests include full-stack systems, Business Intelligence, Data Analytics, AI-powered applications, industrial monitoring, IoT, predictive maintenance, automation and AI agents.",
      "EventPulse and Industrial Motor Intelligence are examples of this direction. I’m working on an event management and smart-ticketing platform, and an industrial predictive-maintenance project exploring motor sensor data and equipment health. Both are in progress. They give me different contexts for the same goal: learning to turn a practical requirement into a useful, data-driven application.",
      "I believe the fastest way to understand technology is to build with it. Rather than waiting to master every concept before starting, I learn through implementation: encounter a real problem, understand the underlying concepts, work through a solution, test it and improve it. I enjoy building from scratch, experimenting with tools and seeing an idea become something that works.",
      "Modern AI development tools and AI agents help me explore unfamiliar technologies, debug problems and understand new concepts. I use them as development and learning assistants—not as a replacement for understanding my own work. I review, test and improve the output, and take responsibility for what I build.",
    ],
  },
  {
    id: "direction",
    title: "Where I’m Heading",
    subtitle: "Engineering + software + data + AI.",
    paragraphs: [
      "I want to explore the areas where these disciplines meet. Industrial systems generate operational data from sensors and equipment; software and AI can help analyze that data, identify patterns, detect anomalies and support better decisions. Applying these ideas to monitoring, energy use and predictive maintenance is a direction I want to develop through my projects.",
      "My primary career direction is technical. I’m interested in opportunities in Full-Stack Development, Software Development, Python Development, Data Analytics, AI/ML, AI-powered application development and data-driven industrial technology or IoT. I’m still developing my capabilities, and I’m looking for work where I can contribute, deepen my understanding and keep building practical solutions.",
      "Alongside that technical journey, my experience in event management, operations and logistics has helped me develop leadership, team coordination and communication. Working under deadlines and managing multiple responsibilities taught me to stay organized and solve problems with others. I carry those lessons into technical work; they support my direction rather than define it.",
    ],
  },
];

const interests = [
  { id: "full-stack", label: "Full-stack", detail: "HTML · CSS · JavaScript · React · Java · Spring Boot · REST APIs · Git / GitHub", icon: Code2 },
  { id: "data", label: "Python & data", detail: "Python · Pandas · NumPy · SQL · EDA · Visualization · Statistics", icon: Database },
  { id: "ai", label: "AI & applications", detail: "Machine Learning · Predictive Analytics · AI Agents · Natural-language analysis", icon: Lightbulb },
  { id: "engineering", label: "Engineering & industry", detail: "Electrical Systems · Sensors · IoT · Monitoring · Predictive Maintenance", icon: CircuitBoard },
];

export default function AboutSection({ cvUrl }: { cvUrl: string }) {
  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title" data-testid="about-section-container">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-4xl" data-testid="about-heading">
          <p className="section-kicker" data-testid="about-overline">01 / MY STORY</p>
          <h2 id="about-title" className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" data-testid="about-title">An engineering foundation.<br /><span className="text-sky-300">A software-driven future.</span></h2>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl" data-testid="about-introduction">I’m Atanu, an Electrical Engineering graduate building a career in software development, data analytics and AI. I’m interested in creating practical full-stack, data-driven and AI-powered applications—and in what becomes possible when engineering knowledge and modern software come together.</p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="about-sidebar lg:sticky lg:top-28" data-testid="about-story-sidebar">
            <p className="section-kicker text-slate-500" data-testid="about-navigation-label">Inside my story</p>
            <nav className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-1" aria-label="About Me chapters" data-testid="about-chapter-navigation">
              {chapters.map((chapter, index) => (
                <a key={chapter.id} href={`#about-${chapter.id}`} className="about-chapter-link" data-testid={`about-jump-${chapter.id}`}><span className="font-mono text-[10px] text-sky-300" aria-hidden="true">0{index + 1}</span>{chapter.title}<ArrowDownRight size={13} className="ml-auto shrink-0" aria-hidden="true" /></a>
              ))}
            </nav>
            <Card className="mt-7 border-sky-400/20 bg-sky-400/[0.04]" data-testid="about-method-card">
              <CardContent className="p-5">
                <Code2 className="mb-4 text-sky-300" size={22} aria-hidden="true" />
                <h3 className="text-lg font-medium text-white" data-testid="about-method-title">How I learn</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400" data-testid="about-method-description">I build to understand, then improve what I’ve built.</p>
                <ol className="mt-5 flex flex-wrap gap-2" aria-label="My development process" data-testid="about-learning-process">
                  {["Learn", "Build", "Test", "Debug", "Improve", "Deploy", "Document"].map((step, index) => <li key={step} className="flex items-center gap-2 font-mono text-[11px] text-sky-200" data-testid={`about-process-${step.toLowerCase()}`}>{index > 0 && <span className="text-slate-600" aria-hidden="true">→</span>}{step}</li>)}
                </ol>
              </CardContent>
            </Card>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-sky-300" data-testid="about-view-cv-link">Read my CV <ArrowUpRight size={15} aria-hidden="true" /></a>
          </aside>

          <div className="min-w-0" data-testid="about-story-content">
            {chapters.map((chapter, index) => (
              <article id={`about-${chapter.id}`} key={chapter.id} className="about-chapter" aria-labelledby={`about-${chapter.id}-title`} data-testid={`about-${chapter.id}-chapter`}>
                <div className="flex items-baseline gap-4"><span className="font-mono text-xs text-sky-400/60" aria-hidden="true">0{index + 1}</span><h3 id={`about-${chapter.id}-title`} className="text-2xl font-semibold text-white sm:text-3xl" data-testid={`about-${chapter.id}-title`}>{chapter.title}</h3></div>
                <p className="mt-3 text-sm font-medium text-sky-200/90" data-testid={`about-${chapter.id}-subtitle`}>{chapter.subtitle}</p>
                <div className="mt-5 space-y-5">{chapter.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex} className="about-prose" data-testid={`about-${chapter.id}-paragraph-${paragraphIndex + 1}`}>{paragraph}</p>)}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8" data-testid="about-technical-summary">
          <div className="flex flex-wrap items-center justify-between gap-4"><h3 className="text-xl font-semibold text-white" data-testid="about-summary-title">My technical focus, at a glance</h3><Badge variant="outline" className="border-sky-400/20 text-sky-200" data-testid="about-learning-status">Actively learning & building</Badge></div>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">{interests.map(({ id, label, detail, icon: Icon }) => <div key={id} className="flex gap-4" data-testid={`about-summary-${id}`}><Icon size={20} className="mt-1 shrink-0 text-sky-300" aria-hidden="true" /><div><h4 className="text-sm font-semibold text-slate-200" data-testid={`about-summary-${id}-title`}>{label}</h4><p className="mt-2 text-sm leading-relaxed text-slate-400" data-testid={`about-summary-${id}-detail`}>{detail}</p></div></div>)}</div>
        </div>
      </div>
    </section>
  );
}