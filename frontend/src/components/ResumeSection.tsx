import { ArrowUpRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ResumeSection({ cvUrl }: { cvUrl: string }) {
  return (
    <section id="resumes" className="section-shell" aria-labelledby="resumes-title" data-testid="resumes-section">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="section-kicker" data-testid="resumes-overline">05 / MY CV</p>
        <h2 id="resumes-title" className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl" data-testid="resumes-title">The details behind my direction.</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate-400" data-testid="resumes-description">My education, technical skills and portfolio projects, together in one document.</p>
        <Card className="card-surface mt-9 border-sky-400/20" data-testid="resume-software-card">
          <CardContent className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><FileText className="text-sky-300" size={28} aria-hidden="true" /><h3 className="mt-5 text-2xl font-semibold text-white" data-testid="resume-software-title">Full-Stack Development · AI · Data · Industrial Intelligence</h3><p className="mt-4 max-w-2xl leading-relaxed text-slate-400" data-testid="resume-software-copy">I’m an Electrical Engineering graduate developing practical software and data skills. My CV includes in-progress and planned projects, with their status clearly identified.</p><div className="mt-6 flex flex-wrap gap-2">{["Engineering foundation", "Software & data", "AI-powered applications"].map((label, index) => <Badge key={label} variant="outline" className="border-white/10 text-slate-300" data-testid={`resume-focus-${index + 1}`}>{label}</Badge>)}</div></div>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-[transform,background-color] hover:-translate-y-1 hover:bg-sky-300" data-testid="resume-view-cv-button">View my CV (PDF) <ArrowUpRight size={17} aria-hidden="true" /></a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}