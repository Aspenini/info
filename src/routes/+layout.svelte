<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { themeFromPath } from '$lib/theme';
	import { page } from '$app/state';
	import '../app.css';
	import '$lib/styles/themes.css';

	let { children } = $props();

	const theme = $derived(themeFromPath(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app" data-theme={theme}>
	<SiteHeader {theme} />
	<main id="content" class="main">
		{@render children()}
	</main>
	<SiteFooter />
</div>
