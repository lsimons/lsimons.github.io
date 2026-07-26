# AGENTS.md

Context for AI coding agents working on this repository.

## What this is

The root user site for GitHub Pages, published at <https://lsimons.github.io/>.
A small landing page listing my open source pet projects, built with Astro
Starlight (bun). Because it is the *user* site it deploys at the domain root -
there is no `base` path (project sites like agent-engineer-course and caseum set
their own).

## Layout

- `docs/` - Astro Starlight site. Landing page:
  `docs/src/content/docs/index.mdx` (a `template: splash` page with a
  `CardGrid` of projects). Config: `docs/astro.config.mjs`.
- `mise.toml` - pinned tools (bun, just, prek, lychee, gitleaks). Run
  `mise install` first.
- `justfile` - `just docs-install`, `docs-dev`, `docs-build`, `docs-check`.
- Dev server: `just docs-dev` -> <http://localhost:4321/>. Astro 7's
  `astro dev` daemonizes: manage with `astro dev stop|status|logs`.

## Rules

- **No `base` path.** This is the user site at the domain root. Do not copy the
  rehype base-link plugin from the project sites.
- `.mdx` landing page: mdformat and markdownlint mangle JSX, so the prek hooks
  exclude `.mdx`. Keep new content pages as `.md` where possible.
- Formatting is mdformat style; the pre-commit hook enforces it for `.md`.

## Tooling / process

- Git hooks via prek (`prek install -t pre-commit -t commit-msg` once per
  clone): mdformat, markdownlint, lychee (link check), gitleaks, commitlint.
- **Conventional commits are enforced** (`docs:`, `fix:`, `ci:`, `build:`,
  `feat:` ...). Also add `Assisted-by: <Agent>:<model>` trailer per user
  convention.
- CI (`.github/workflows/ci.yml`) builds + astro-checks on push/PR.
  Deploy (`deploy.yml`) publishes `docs/dist` to GitHub Pages on push to main.
  The Pages source must be "GitHub Actions" (not "Deploy from a branch").
- Dependabot is active (bun + actions, weekly); typescript is held to 6.x
  (@astrojs/check needs ^5||^6) - keep the ignore rule.
- Verify changes with `just docs-build`.
