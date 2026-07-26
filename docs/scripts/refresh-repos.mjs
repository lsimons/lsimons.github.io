#!/usr/bin/env bun
// Refresh src/data/repos.json - my public, non-fork, non-archived
// repositories (alphabetical, with their GitHub description) - from GitHub via
// the `gh` CLI.
//
// Run with `just docs-repos`. Requires an authenticated `gh` (`gh auth status`).
// The output is committed so the site build stays hermetic (no network).
//
// Note: src/intro.md was seeded from my profile README but is now hand-curated,
// so it is intentionally NOT regenerated here.

import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OWNER = 'lsimons';

// Repos that are mine but not "projects" to list: this site, the profile
// README repo, and the org `.github` defaults repo.
const EXCLUDE = new Set(['lsimons', 'lsimons.github.io', '.github']);

const srcDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');

function gh(args) {
	return execFileSync('gh', args, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
}

// --- repositories -----------------------------------------------------------
// --source excludes forks; --no-archived excludes archived; --visibility public
// excludes private. We still assert those flags below to be safe.
const raw = JSON.parse(
	gh([
		'repo', 'list', OWNER,
		'--source', '--no-archived', '--visibility', 'public',
		'--limit', '500',
		'--json', 'name,description,url,isFork,isArchived,isPrivate',
	]),
);

const repos = raw
	.filter((r) => !r.isFork && !r.isArchived && !r.isPrivate && !EXCLUDE.has(r.name))
	.map((r) => ({ name: r.name, description: r.description ?? '', url: r.url }))
	.sort((a, b) => a.name.localeCompare(b.name, 'en'));

mkdirSync(join(srcDir, 'data'), { recursive: true });
writeFileSync(join(srcDir, 'data', 'repos.json'), JSON.stringify(repos, null, '\t') + '\n');
console.log(`Wrote src/data/repos.json (${repos.length} repositories)`);
