# Atanu Bhowmick Portfolio

## What it does

Single-page professional portfolio presenting Atanu as an Electrical Engineering graduate building a technical career in full-stack development, Python, data analytics and AI, including industrial technology / IoT. Engineering is an advantage and continuing foundation, not an abandoned discipline. Events, operations, sales and business development are secondary transferable experience only. The public site is static-first and remains useful without a backend response.

## Key flows

- Browse sticky navigation through About, Capabilities, Experience, Qualifications, Resumes and Contact.
- Read a substantial first-person About Me with chapter navigation: My Background, My Technical Journey, What I’m Building, Where I’m Heading, followed by a compact technical summary.
- Read the learn → build → test → debug → improve → deploy → document approach; AI is a learning/development assistant with human review, testing and responsibility, not autonomous authorship.
- Filter the skills matrix by technical focus or transferable skills.
- Open the qualifications detail overlay.
- Copy the email address, click to call, open LinkedIn, or prepare an email draft through the mailto contact form.
- Open the user's actual uploaded CV PDF through the About Me and CV section links. It replaces the previous two equal career-track email-request cards.

## Content model

- Identity: Atanu Bhowmick, B.Tech Electrical Engineering graduate, MAKAUT University (university supplied explicitly by user), Future Institute of Engineering and Management, 2022–2026, CGPA 7.1 (college/dates/grade from uploaded CV).
- Contact: bhowmickatanu83@gmail.com (latest CV, supersedes prior address containing 083), +91 9679644406, linkedin.com/in/atanu-bhowmick-a077aa283.
- Primary directions: full-stack/software/Python development, data analytics, AI/ML and AI-powered applications, industrial technology / IoT. No claims of expertise or professional data analyst employment.
- EventPulse and Industrial Motor Intelligence are user-supplied project names used for the CV's event management/smart ticketing and industrial predictive-maintenance directions, respectively. Both are explicitly in progress; no live project links, achieved metrics, or completed capabilities claimed.
- The CV also lists planned AI Energy & Industrial Intelligence Dashboard and AI Business & Data Analytics Agent; planned does not mean built.
- Source CV: https://customer-assets-7cd3h4nn.emergentagent.net/job_tech-events-ops/artifacts/sjd6bs5w_Atanu%27s%20CV.pdf . Linked directly, not modified or regenerated.
- Core technical stack and interests reflect the user's detailed brief and CV. Current learning is identified honestly. Additional event, business development/sales and quality control experience comes from the original user brief, not invented employers/dates.

## Auth and integrations

No authentication, accounts, database-backed portfolio content, or third-party integrations. Contact actions use mailto, tel and external LinkedIn links only.

## Deployment

- GitHub repository target: `Atanu010/atanubhowmick.github.io`, branch `main`.
- `.github/workflows/deploy-pages.yml` builds the Vite app from `frontend/` and deploys `frontend/dist` to GitHub Pages.
- Vite uses the root base path `/` because this is a GitHub user site repository.
- GitHub Pages hosts only the static frontend. The FastAPI backend remains in the repository for separate hosting and is not deployed by the Pages workflow.