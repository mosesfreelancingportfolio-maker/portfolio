# Portfolio — Moses Joseph Benjamin

Personal portfolio site built with Next.js (App Router), Tailwind CSS, and MDX case studies.
Contact form delivers email through Brevo. Hosted on Vercel.

Live site: https://portfolio-<your-id>.vercel.app _(update after first deploy)_

---

## Daily workflow: pushing code through the pipeline

You never run builds or deploys manually. The pipeline does everything:

```
git push ──► GitHub Actions (CI) ──► Vercel (CD)
             lint + typecheck        auto-deploy to production
             + production build
```

### Step by step

**1. Make your changes**

Edit files locally as usual. To preview locally before pushing:

```bash
npm run dev        # dev server at http://localhost:3000
```

**2. Commit your work**

```bash
git add -A                          # stage all changes (or list specific files)
git commit -m "Describe what changed"
```

**3. Push — this triggers everything**

```bash
git push
```

That single command kicks off both stages automatically:

| Stage | Where | What happens |
|---|---|---|
| CI | GitHub Actions | Installs deps, runs ESLint, runs a full production build (includes TypeScript checks) |
| CD | Vercel | Deploys `main` to production; other branches get preview URLs |

**4. Check status**

- **CI**: Repo → **Actions** tab → latest run on your commit.
  - ✅ green check = code is valid
  - ❌ red X = something failed; open the run and click the failed step to see logs
- **CD**: Your Vercel dashboard → project → Deployments tab.

**5. If CI fails**

Fix the issue locally, verify, then commit + push again:

```bash
npm run lint        # check what ESLint flags
npm run build       # check what TypeScript/build flags
```

The same errors that appear in Actions will reproduce locally.

---

## One-time setup (already done)

- Remote: `origin` → `github.com/mosesfreelancingportfolio-maker/portfolio`
- Branch: `main` (default)
- CI workflow: `.github/workflows/ci.yml`
- Env vars configured in Vercel project settings:
  - `BREVO_API_KEY` — transactional email API key
  - `CONTACT_TO_EMAIL` — inbox that receives form submissions
  - `CONTACT_FROM_EMAIL` — verified sender address
  - `NEXT_PUBLIC_SITE_URL` — canonical site URL (optional; falls back to the Vercel domain)

## Local development setup (new machine)

```bash
git clone https://github.com/mosesfreelancingportfolio-maker/portfolio.git
cd portfolio
npm install
cp .env.example .env        # then fill in your values
npm run dev
```

`.env` is gitignored — never commit it.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (runs TypeScript checks) |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Adding content

- **Projects**: edit `src/data/projects.ts`, add a case study at `src/content/projects/<slug>.mdx`, and drop a screenshot into `public/projects/`.
- **Services / skills**: edit `src/data/services.ts` and `src/data/skills.ts`.
- **Identity, links, contact info**: edit `src/lib/config/site.ts`.
