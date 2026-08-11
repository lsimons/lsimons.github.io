# Issue tracker: GitHub

Issues for this project are managed as GitHub issues, in the same remote as the
source code: <https://github.com/lsimons/lsimons.github.io/issues>.

Use the `gh` CLI for all operations; `gh issue --help` covers it.

Verified enabled rather than assumed — this repository had issues turned **off**
until 2026-08-11, so the check is worth keeping:

```console
$ gh api repos/lsimons/lsimons.github.io --jq .has_issues
true
```

Projects, the wiki and Discussions remain **off**. Do not point anything at
them.

> **Note on the path of this file.** `docs/` in this repository is the Astro
> Starlight site, not a general documentation directory. This file lives at
> `docs/agents/` for consistency with the other repositories here, where agent
> tooling expects that path. Astro only builds `docs/src/` and `docs/public/`,
> so nothing under `docs/agents/` is published — verified by building and
> confirming `docs/dist` contains nothing matching "agents".

## Triage labels

The triage set is these four, all `#e6e6fa`:

```text
NAME              DESCRIPTION
needs-triage      Maintainer needs to evaluate this issue
needs-info        Waiting on reporter for more information
ready-for-agent   Fully specified, ready for an autonomous agent
ready-for-human   Requires human implementation
```

The intended flow:

- `needs-triage` — newly filed, nobody has looked yet. Every new issue starts
  here.
- `needs-info` — blocked on the reporter. Comes off once they answer.
- `ready-for-agent` — specified well enough that an autonomous agent can
  implement it without further questions. This is the label to aim for.
- `ready-for-human` — needs human judgement, access or taste.

An issue should carry exactly one of these at a time. Labels are shared between
issues and pull requests, so they can be applied to PRs too.

## Other labels

GitHub's defaults (`bug`, `documentation`, `enhancement`, `wontfix`,
`duplicate`, `good first issue`, `help wanted`, `invalid`, `question`) exist and
are useful for categorising, but are **not** part of the triage set above —
including `wontfix`, which records a decision rather than a triage state.

Dependabot additionally maintains `dependencies`, `github_actions` and
`javascript`, and applies them to its own pull requests.

## Not through issues

Security problems do not belong in a public issue. Private vulnerability
reporting is enabled, so the "Report a vulnerability" button under the
repository's Security tab is the channel. There is deliberately no
`SECURITY.md`.
