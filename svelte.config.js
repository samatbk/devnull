import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from "mdsvex";

const mdsvex_options = {
	extensions: [".md"],
};

const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: [".svelte", ".md"],
	preprocess: [vitePreprocess(), mdsvex(mdsvex_options)],

	kit: {
		adapter: adapter()
	}
};

export default config;
