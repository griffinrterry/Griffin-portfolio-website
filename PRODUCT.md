# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and recruiters evaluating Griffin Terry for full-time roles, arriving
from a résumé, a LinkedIn profile, or an application. They are usually skimming under
time pressure, often on a phone, comparing several candidates. Their job is to decide
within a minute or two whether Griffin is worth an interview, and then to find enough
specific evidence to defend that decision to someone else.

Secondary, not leading: founders, peers, and prospective contract clients.

## Product Purpose

A personal portfolio that proves Griffin can take a vague problem to a shipped product
— including the data layer, the build, and the distribution — and that he works with AI
agents as an engineered system rather than as a shortcut. Success is an interview
request, and a visitor who can name a specific piece of his work.

## Positioning

The claim a neighboring portfolio could not truthfully copy: Griffin ships products
end-to-end *and* designs the agent systems that operate them, with verification built in
— research that killed a planned feature, a fact-check gate that killed a finished
marketing asset, an audit that changed shipped production data. The through-line is
honesty under pressure to overclaim, in both the products and the marketing.

## Operating Context

Four pages: a homepage (hero, about, work, agent systems, experience, contact) and three
case studies (next4, Hirely, CoPilot). A research sub-page for next4 is planned. Visitors
arrive at the homepage or deep-link straight to a case study from an application. A
résumé PDF download and an email CTA are the conversion actions.

## Capabilities and Constraints

- Plain static HTML, CSS, and JS. No build step, no framework, no package manager.
- Deployed on Vercel from `github.com/griffinrterry/Griffin-portfolio-website`, served at
  `griffinterry.com`. `vercel.json` sets `cleanUrls`, so pages are linked without `.html`.
- Vercel's git auto-deploy is currently unreliable; releases go out via CLI deploy plus an
  explicit `vercel promote`.
- Scroll-reveal, mobile nav, and card-hover behavior live in one small `script.js`.
- Fonts load from Google Fonts. No analytics beyond Vercel Web Analytics.
- Known defect: `/favicon.ico` returns 404 on every page.

## Brand Commitments

- Name and wordmark: "Griffin.Terry".
- Voice: plain, first-person, specific, no hype and no marketing gloss. States open
  problems and things that went wrong alongside results.
- Existing assets: headshot, résumé PDF, next4 and Hirely logos, next4 App Store
  screenshots, agent-produced marketing carousel and video, Hirely product screenshots
  and demo video.

## Evidence on Hand

Real, verifiable, and already published:

- **next4** — live on the App Store (`id6806343171`) since 2026-09-02; web app at
  `app.yournext4.com`. 6,271 institutions and 145,000+ facts from IPEDS, College
  Scorecard, the Common Data Set, Carnegie classifications, and BEA regional price
  parities. An 86-card sort across six categories. Deterministic ranking with no LLM in
  the critical path.
- **Demand research** — a fielded survey (n=69 parents, n=15 students, August 2026) and a
  qualitative pass over 1,226 Reddit comments across 39 threads, coded and adversarially
  verified. Survey source: `next4/Research/Demand Survey Results - Parents + Students (Aug 2026).md`.
- **Competitive analysis** — a six-segment landscape with named competitors, produced by a
  fan-out research harness (5 search angles, 106 agents, 17 sources, 85 claims extracted,
  25 adversarially verified: 16 confirmed, 2 refuted, 7 re-verified by live fetch).
  Source: `next4/Research/Competitive Landscape Summary.md`.
- **Agent-run marketing** — a documented system: 7 content pillars, 6 channels, 12
  non-negotiable rules, 14 posts/week, run from a structured workbook with scheduled
  research and dispatch emails.
- **Hirely** — live at `hirelyapply.com`; early beta, 100% activation on the scan feature
  among new signups, 2,000+ LinkedIn impressions in 14 days, 3 hands-on beta users.
- **CoPilot** — tied for first of 12 teams; 100+ consumer interviews; 5-year model.
- **Background** — CU Boulder B.A. Political Science & Economics, Business minor, cum
  laude, 3.75 GPA, May 2026. AI Trainer at Handshake. Semester at Universidad Carlos III
  de Madrid.

Must not be fabricated or implied: next4 download counts, revenue, funding, team size
beyond the two co-founders, users beyond those stated, press coverage, or any employer
relationship that does not exist.

Withheld by decision: next4's internal price points and its pricing-model deliberation,
competitive strategy conclusions, and legal/counsel status.

## Product Principles

1. **Evidence over adjectives.** Every claim carries a number, an artifact, or a link.
   Nothing is described as innovative, cutting-edge, or passionate.
2. **Show the verification, not just the result.** The research that killed a feature and
   the check that killed a finished asset are the strongest proof available; they belong
   in the foreground.
3. **Name the open problems.** Unfinished work is stated plainly. It is more credible than
   a clean story and matches how Griffin actually talks.
4. **Skimmable first, deep second.** A recruiter must get the claim in fifteen seconds and
   be able to go three levels deeper if interested.
5. **Nothing is claimed that the products don't do.** The same anti-fabrication rule that
   governs Hirely and next4 governs this site.

## Accessibility & Inclusion

No product-specific standard has been established. Baseline expectations apply: legible
contrast, keyboard-reachable navigation, real text rather than text baked into images,
and respect for reduced-motion preferences (the current site honors
`prefers-reduced-motion`).
