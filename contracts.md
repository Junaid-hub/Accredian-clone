# Contracts — Accredian Enterprise Clone (Frontend-only)

> Per user request, this build is **frontend-only with mock submissions**. This file documents the boundaries so a backend can be swapped in later with minimal changes.

## 1. Mocked data (lives in `frontend/src/mock/mock.js`)
- `navLinks`, `heroBullets`, `stats`, `partners`
- `edgeFeatures`, `domains`, `courseCategories`, `whoShouldJoin`
- `catFramework`, `deliverySteps`, `faqs`, `testimonials`, `footerLinks`
- `quizQuestions`, `quizRecommendations` (for AI Skill Assessment Quiz)
- `roiDefaults` (for ROI Calculator)
- `programCatalog` (for Program Comparison)
- `learningModules` (for Learning Path Builder)

## 2. Mock interactions (persist to `localStorage`)
| UI Action | Storage key | Future API |
|---|---|---|
| Submit "Enquire Now" form | `accredian_leads` | `POST /api/leads` |
| Save learning path | `accredian_learning_path` | `POST /api/learning-paths` |
| Theme preference | `accredian_theme` | client-only (no API needed) |

## 3. Future API contracts (not implemented; for reference)
```
POST /api/leads
body: { name, email, company, teamSize, message }
→ 201 { id, submittedAt }

POST /api/learning-paths
body: { userId?, modules: [{ id, order }] }
→ 201 { id, totalWeeks }

GET /api/programs
→ 200 [ { id, name, domain, duration, format, level, price, outcomes, rating } ]

POST /api/quiz/submit
body: { answers: { role, focus, experience, style, goal } }
→ 200 { recommendedDomain, programs: [...], reasoning }
```

## 4. Swap guide (when backend is added)
- Replace `toast.success` + `localStorage.setItem` calls in `LeadCaptureModal.jsx` / `LearningPathBuilder.jsx` with `axios.post(${BACKEND_URL}/api/...)`.
- Replace `programCatalog` / `learningModules` imports with `useEffect` + `axios.get`.
- Replace the deterministic `quizRecommendations[focus]` lookup with a `POST /api/quiz/submit` call.
- All components already receive data via props/mock, so no UI changes needed.
