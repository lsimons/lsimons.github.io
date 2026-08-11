# lsimons.github.io

Source for <https://lsimons.github.io/> - a small landing page for my open
source pet projects, built with [Astro Starlight](https://starlight.astro.build/).

## Develop

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through
[mise](https://mise.jdx.dev/tasks/). Every tool is pinned to an exact version
on purpose - see the comment at the top of `.mise.toml`.

```sh
mise install            # install the pinned toolchain
mise run docs-install   # bun install
mise run docs-dev       # dev server at http://localhost:4321/
mise run docs-build     # static build into docs/dist
mise run ci             # the full gate: install, lint, check, build
```

`mise tasks` lists them all. The ones worth knowing beyond the above:

- `mise run lint` - the nine `pre-commit`-staged prek hooks (whitespace, YAML,
  TOML, large files, merge conflicts, mdformat, markdownlint, gitleaks) plus
  `actionlint` over the workflows. Not commitlint, which is
  `commit-msg`-staged.
- `mise run audit` - [zizmor](https://docs.zizmor.sh/) audit of the workflows
  and the dependabot config. Needs an authenticated `gh`.
- `mise run links` - `lychee` broken-link check. Kept out of `ci` because it is
  a network check that flakes on rate limits.
- `mise run docs-repos` - regenerate `docs/src/data/repos.json` from GitHub.
- `mise run ci-watch` - watch the GitHub Actions run for the current branch.

Git hooks are managed with [prek](https://prek.j178.dev); install them once per
clone with `prek install -t pre-commit -t commit-msg`. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## Publish

Every push to `main` runs `.github/workflows/deploy.yml`, which builds
`docs/dist` and publishes it to GitHub Pages at <https://lsimons.github.io/>.
The Pages source must be set to "GitHub Actions" in the repository settings.

## Layout

- `docs/` - the Astro Starlight site. Landing page:
  `docs/src/content/docs/index.mdx`.
- `docs/agents/` - notes for AI coding agents; not part of the built site.
- `.mise.toml` - pinned tools and dev/build tasks (run with `mise run <task>`).
- `.github/workflows/` - `ci.yml` (lint, check and build, plus a zizmor audit,
  on PRs and pushes to main) and `deploy.yml` (publish on push to main).

See [AGENTS.md](AGENTS.md) for how the page is assembled and what is
hand-curated versus generated.
