# Issue tracker: GitHub

Issues for this project are managed as GitHub issues.

The issues live in the same remote as the source code (the GitHub default):
<https://github.com/lsimons/lsimons.github.io/issues>.

Use the `gh` CLI for all operations. You can learn about it with
`gh issue --help`.

> **Note on the path.** `docs/` in this repository is the Astro Starlight
> site, not a general documentation directory. This file lives at
> `docs/agents/` for consistency with the other repositories here, where
> agent tooling expects that path. Astro only builds `docs/src/` and
> `docs/public/`, so nothing under `docs/agents/` is published.

## Labels

The following issue labels are used:

```text
NAME              DESCRIPTION                                     COLOR
bug               Something isn't working                         #d73a4a
documentation     Improvements or additions to documentation      #0075ca
enhancement       New feature or request                          #a2eeef
needs-triage      Maintainer needs to evaluate this issue         #e6e6fa
needs-info        Waiting on reporter for more information        #e6e6fa
ready-for-agent   Fully specified, ready for an autonomous agent  #e6e6fa
ready-for-human   Requires human implementation                   #e6e6fa
wontfix           This will not be worked on                      #ffffff
```

The four `#e6e6fa` labels are the triage set:

- `needs-triage` — newly filed, nobody has looked yet.
- `needs-info` — blocked on the reporter.
- `ready-for-agent` — specified well enough that an autonomous agent can
  implement it without further questions.
- `ready-for-human` — needs human judgement, access or taste.

GitHub's default `duplicate`, `good first issue`, `help wanted`, `invalid` and
`question` labels also exist but are not part of the workflow above.
Dependabot additionally maintains `dependencies`, `github_actions` and
`javascript` and applies them to its own pull requests.
