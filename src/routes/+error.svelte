<script lang="ts">
	import { page } from '$app/state';

	const code = $derived(page.status || 404);
</script>

<svelte:head>
	<title>{code} | Info</title>
</svelte:head>

<div class="container">
	<h1 class="page-title">{code}</h1>
	<p class="intro">Page not found.</p>
	<section class="tile-grid">
		<a class="tile tile-wiiu" href="/wiiu/"><span class="tile-title">Wii U</span></a>
		<a class="tile tile-mcu" href="/mcu/"><span class="tile-title">MCU</span></a>
	</section>
</div>
