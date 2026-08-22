import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		// Vite 8 minifies CSS with LightningCSS, which drops unprefixed
		// `backdrop-filter` when `-webkit-backdrop-filter` is also present.
		cssMinify: 'esbuild'
	},
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	]
});
