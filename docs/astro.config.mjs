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
			// Favicon generated from my profile picture (see docs/public/).
			favicon: '/favicon.png',
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				},
				// Fonts: Merriweather = long-form/body, Merriweather Sans = on-screen/UI.
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Merriweather+Sans:wght@400;700&display=swap',
					},
				},
			],
			// Header menu mirroring https://leosimons.com (Home/Blog/GitHub/LinkedIn),
			// rendered in place of Starlight's social icons.
			components: {
				SocialIcons: './src/components/Nav.astro',
			},
			// A single landing page; hide the (empty) sidebar and table of contents.
			pagination: false,
			// One static page - no search box needed.
			pagefind: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
