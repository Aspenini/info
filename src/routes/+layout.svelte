<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { mcuView } from '$lib/mcu-mode.svelte';
	import { themeFromPath } from '$lib/pages';
	import { page } from '$app/state';
	import '../app.css';
	import '$lib/styles/themes.css';

	let { children } = $props();

	const doom = $derived(page.url.pathname.startsWith('/mcu') && mcuView.doomsday);
	const theme = $derived(doom ? 'doom' : themeFromPath(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app" data-mode={doom ? 'doomsday' : undefined}>
	<SiteHeader />
	<div class="page" data-theme={theme}>
		<main id="content" class="main">
			{@render children()}
		</main>
	</div>
	<SiteFooter />
</div>
