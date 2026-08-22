<script lang="ts">
	import PageTiles from '$lib/components/PageTiles.svelte';
	import { site } from '$lib/pages';
</script>

<svelte:head>
	<title>{site.name} | {site.host}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<div class="container">
	<PageTiles />
</div>
