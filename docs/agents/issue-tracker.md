# Issue tracker: none — this repository has issues disabled

**There is no issue tracker for this repository.** GitHub Issues are turned
off:

```console
$ gh api repos/lsimons/lsimons.github.io --jq .has_issues
false
$ gh issue list
the 'lsimons/lsimons.github.io' repository has disabled issues
```

Projects, the wiki and Discussions are off too, so this looks deliberate rather
than accidental. Do not try to file, read or triage issues here — `gh issue`
will fail, and the `/issues` URL redirects to the repository home page.

## How work arrives instead

- **Pull requests.** A change is proposed as a PR against `main`, and the PR is
  the unit of discussion. See [CONTRIBUTING.md](../../CONTRIBUTING.md).
- **Security reports.** Private vulnerability reporting is enabled, so the
  "Report a vulnerability" button under the repository's Security tab is a
  working channel. That is the only private channel this repo has; there is
  deliberately no `SECURITY.md`.
- **Dependency updates.** Dependabot opens PRs directly.

If you are an agent that was told to "file an issue", you cannot. Say so rather
than working around it.

> **Note on the path of this file.** `docs/` in this repository is the Astro
> Starlight site, not a general documentation directory. This file lives at
> `docs/agents/` for consistency with the other repositories here, where agent
> tooling expects that path. Astro only builds `docs/src/` and `docs/public/`,
> so nothing under `docs/agents/` is published — verified by building and
> confirming `docs/dist` contains nothing matching "agents".

## Labels

Labels exist on this repository and are shared between issues and pull
requests. With issues disabled, **they can only ever be applied to pull
requests.**

The triage set is these four, all `#e6e6fa`:

```text
NAME              DESCRIPTION
needs-triage      Maintainer needs to evaluate this issue
needs-info        Waiting on reporter for more information
ready-for-agent   Fully specified, ready for an autonomous agent
ready-for-human   Requires human implementation
```

- `needs-triage` — newly opened, nobody has looked yet.
- `needs-info` — blocked on the author.
- `ready-for-agent` — specified well enough that an autonomous agent can
  implement it without further questions.
- `ready-for-human` — needs human judgement, access or taste.

These four were created during the 2026-08-11 setup run. Their descriptions on
the remote say "issue" because that is the fleet-wide wording, not because
issues work here.

GitHub's defaults (`bug`, `documentation`, `enhancement`, `wontfix`,
`duplicate`, `good first issue`, `help wanted`, `invalid`, `question`) also
exist but are **not** part of the triage set. Dependabot additionally maintains
`dependencies`, `github_actions` and `javascript` and applies them to its own
pull requests.
