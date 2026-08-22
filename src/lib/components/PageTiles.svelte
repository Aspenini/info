<script lang="ts">
	import { pages } from '$lib/pages';
</script>

<section class="tile-grid">
	{#each pages as page (page.slug)}
		<a class="tile" data-page={page.slug} href={page.href}>
			<span class="tile-title">{page.title}</span>
		</a>
	{/each}
</section>
