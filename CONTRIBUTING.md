# Contributing

Thank you for investing your time in contributing to this project!

This repository holds the source for <https://lsimons.github.io/>, a small
landing page for my open source pet projects. It is a personal site, so most
of its content is not something a contributor would want to change — but
build fixes, broken links, accessibility problems and tooling improvements
are all very welcome.

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community
approachable and respectable.

Bug reports and feature requests go in [GitHub
issues](https://github.com/lsimons/lsimons.github.io/issues). Code changes
arrive as pull requests against `main`.

Do not report a security problem in a public issue. Use the "Report a
vulnerability" button under the repository's Security tab instead.

You could read the [open source contribution
guide](https://opensource.guide/how-to-contribute/) for general advice on how
to contribute.

AI agents: see [AGENTS.md](AGENTS.md).

## The site

The site is built with [Astro Starlight](https://starlight.astro.build/) and
lives entirely under `docs/`.

Tools are pinned in `.mise.toml`; run `mise install` once. Then:

- `mise run docs-install` - Install the site dependencies (bun). Updates
  `docs/bun.lock` if `docs/package.json` changed; commit the result.
  `mise run ci` and CI use `docs-install-frozen`, which fails instead of
  quietly resolving the difference.
- `mise run docs-dev` - Start the live-reloading dev server at
  <http://localhost:4321/>.
- `mise run docs-build` - Build the static site into `docs/dist`.
- `mise run docs-check` - Run the Astro type/content check.
- `mise run lint` - Run the prek hooks over every file, plus `actionlint`.
- `mise run ci` - The full gate: install, lint, check, build. Must pass
  before you push.
- `mise run audit` - Run [zizmor](https://docs.zizmor.sh/) over the workflows
  and the dependabot config. Needs an authenticated `gh`; not part of `ci`.
- `mise run links` - `lychee` broken-link check. Not part of `ci`, because it
  is a network check over a page full of external project links and flakes on
  rate limits.
- `mise run docs-repos` - Regenerate `docs/src/data/repos.json` from GitHub.
  Needs an authenticated `gh`. Note this does **not** regenerate
  `docs/src/intro.md`, which is hand-curated.

Open a pull request against `main`. CI runs the same lint/check/build steps
plus a [zizmor](https://docs.zizmor.sh/) audit of the GitHub Actions
workflows; both jobs must be green. Merging to `main` publishes the site.

## Editing pages

The landing page is `docs/src/content/docs/index.mdx`. It is `.mdx` rather
than `.md` because it uses JSX, and `mdformat` and `markdownlint` mangle JSX —
so both are configured to skip `.mdx`. Prefer plain `.md` for any new page so
the formatters apply.

## Commit messages

Follow [Conventional Commits](https://conventionalcommits.org/):
`type(scope): description`.

Git hooks (formatting, linting, link checking, secret scanning,
commit-message linting) are managed with [prek](https://prek.j178.dev).
Install them once per clone:

```bash
prek install -t pre-commit -t commit-msg
```

`mise run lint` runs the nine `pre-commit`-staged hooks over every file, so CI
catches what an uninstalled hook would have missed. It does **not** run
commitlint, which is `commit-msg`-staged — so if you skip `prek install`,
nothing checks your commit message before review.

Since this is a small hobby project, your contribution may not be noticed for
a while if we are busy elsewhere. Sorry!
