<script lang="ts">
	import PageTiles from '$lib/components/PageTiles.svelte';
	import { site } from '$lib/pages';
	import { page } from '$app/state';

	const code = $derived(page.status || 404);
</script>

<svelte:head>
	<title>{code} | {site.name}</title>
</svelte:head>

<div class="container">
	<h1 class="page-title">{code}</h1>
	<p class="intro">Page not found.</p>
	<PageTiles />
</div>
