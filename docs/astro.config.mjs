// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// This is the root user site (https://lsimons.github.io), so it deploys at the
// domain root - no base path. Project sites (agent-engineer-course, caseum)
// live under their own subpaths and set `base` accordingly.
// https://astro.build/config
export default defineConfig({
	site: 'https://lsimons.github.io',
	integrations: [
		starlight({
			title: "Leo's open source stuff",
			description: 'Some of my pet projects.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lsimons' }],
			// A single landing page; hide the (empty) sidebar and table of contents.
			pagination: false,
			// One static page - no search box needed.
			pagefind: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
