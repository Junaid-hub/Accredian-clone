# Here are your Instructions
## AI Usage

I used **Claude (Anthropic)** as a pair-programming assistant throughout this build.

### Where AI helped
- Initial component scaffolding and folder structure suggestions
- Tailwind class conventions and responsive breakpoints
- Boilerplate for repetitive UI (cards, grids, FAQ accordion)
- Debugging a dark-mode contrast issue in the Partnerships marquee

### What I designed and built myself
- **Product decisions**: chose which 5 features to add beyond the clone
  (Skill Quiz, ROI Calculator, Comparison, Path Builder, polish touches)
  based on who would use this page (L&D leaders, CFOs, learners)
- **ROI formula**: productivity value + retention savings − investment,
  with payback months derived from monthly return run-rate
- **Quiz recommendation logic**: mapping the "focus" answer to one of four
  training tracks with a fallback
- **Learning Path Builder UX**: HTML5 drag-and-drop reordering,
  per-category filter, localStorage persistence, max-8 guard
- **Information architecture**: ordering of sections, which features
  get "New" badges in the nav, light/dark palette tuning
- Manual polish: hero composition, CAT framework visual, ROI card
  hierarchy, mobile nav behavior

### What I'd do differently next time
- Use Framer Motion for scroll-reveal animations
- Replace localStorage mocks with a FastAPI + MongoDB backend
  (contracts documented in `/contracts.md`)
- Add Playwright e2e tests for the quiz and lead form

AI accelerated my delivery from ~3 days to ~6 hours, but every
product and UX decision was mine.
