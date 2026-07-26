# lsimons.github.io

Source for <https://lsimons.github.io/> - a small landing page for my open
source pet projects, built with [Astro Starlight](https://starlight.astro.build/).

## Develop

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through
[just](https://just.systems/).

```sh
mise install        # install bun, just, prek, lychee, gitleaks
just docs-install   # bun install
just docs-dev       # dev server at http://localhost:4321/
just docs-build     # static build into docs/dist
```

## Publish

Every push to `main` runs `.github/workflows/deploy.yml`, which builds
`docs/dist` and publishes it to GitHub Pages at <https://lsimons.github.io/>.
The Pages source must be set to "GitHub Actions" in the repository settings.

## Layout

- `docs/` - the Astro Starlight site. Landing page:
  `docs/src/content/docs/index.mdx`.
- `mise.toml` - pinned tools. `justfile` - dev/build tasks.
- `.github/workflows/` - `ci.yml` (build + check on PRs) and `deploy.yml`
  (publish on push to main).
