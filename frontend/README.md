# Accredian Enterprise — Clone + Beyond

A React + Tailwind recreation of the Accredian Enterprise landing page, plus **5 unique interactive features** that go far beyond a typical clone.

> Reference: https://enterprise.accredian.com/

## Tech Stack
- React 19 (Create React App / CRACO)
- Tailwind CSS + shadcn/ui primitives
- lucide-react icons, Poppins font
- React Router, frontend-only (data in `src/mock/mock.js`)

## Features

### Core Clone
Sticky nav, hero with checklist, animated stat counters, partner-logo marquee, Accredian Edge USPs, 7-domain expertise grid, 4-card course segmentation, "Who Should Join" banner, CAT framework, 3-step delivery, FAQs with category tabs, testimonials carousel, contact CTA, full footer, validated lead-capture modal.

### Unique Beyond-Clone Features
1. **AI Skill Assessment Quiz** — 5-step quiz recommending a training track.
2. **Training ROI Calculator** — Live sliders → investment, ROI %, payback months (INR).
3. **Program Comparison Tool** — Compare up to 3 programs side-by-side.
4. **Learning Path Builder** — Drag-and-drop modules, live timeline, save to localStorage.
5. **Polish** — Scroll-progress bar, dark-mode toggle, animated counters, full mobile responsiveness.

## Project Structure
```
frontend/src/
├── App.js, App.css, index.css
├── pages/Home.jsx
├── context/ThemeContext.jsx
├── mock/mock.js
└── components/
    ├── Navbar, Hero, Stats, AnimatedCounter
    ├── Partnerships, AccredianEdge, DomainExpertise, CourseSegmentation
    ├── SkillAssessmentQuiz            (unique)
    ├── WhoShouldJoin
    ├── ROICalculator                  (unique)
    ├── CATFramework
    ├── LearningPathBuilder            (unique)
    ├── HowWeDeliver
    ├── ProgramComparison              (unique)
    ├── FAQs, Testimonials, ContactCTA, Footer
    ├── LeadCaptureModal
    ├── ScrollProgressBar, ThemeToggle (polish)
```

## Setup
```bash
cd frontend
yarn install
yarn start
```
Runs at `http://localhost:3000`.

## Approach
1. Analyzed reference site (layout, palette, type scale, motion).
2. Small, reusable, single-responsibility components (<300 LOC each).
3. All copy & data in `mock/mock.js` so a backend swap is trivial.
4. Added 5 interactive features demonstrating product thinking (quiz → onboarding, ROI → CFO persona, compare → decision support, path builder → personalization).
5. Responsive with Tailwind breakpoints; dark mode via `dark:` classes.

## AI Usage
- **Claude (Anthropic)**: scaffolding, architecture, interaction design for the 5 unique features, Tailwind conventions.
- **Manual improvements**:
  - Tuned hero, CAT framework and ROI result-card aesthetics.
  - Added scroll-progress bar and animated counters (not in reference site).
  - Designed quiz recommendation logic and the ROI formula
    (productivity value + retention savings − investment).
  - Restructured navigation to badge unique features as "New".
  - Polished color contrast, hover transitions, spacing.

## Improvements with more time
- Wire lead capture & path-builder saves to FastAPI + MongoDB.
- Persist quiz results and recommend nuanced program bundles server-side.
- Replace text logo placeholders with real SVG brand marks via CMS.
- Full i18n, WCAG AA audit, Playwright e2e tests.
- Framer Motion reveal animations for sections.

---
Built as an assignment showcase — not affiliated with Accredian.
