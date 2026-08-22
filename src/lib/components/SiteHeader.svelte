<script lang="ts">
	import type { ThemeId } from '$lib/theme';

	let { theme }: { theme: ThemeId } = $props();

	const taglines: Record<ThemeId, string> = {
		hub: 'Notes, lists, and guides',
		homebrew: 'Wii U VC injection',
		mcu: 'Movies + shows watch order'
	};
</script>

<a class="skip-link" href="#content">Skip to content</a>

<header class="site-header">
	<div class="container header-inner">
		<a href="/" class="brand">
			<span class="logo">Info</span>
			<p class="tagline">{taglines[theme]}</p>
		</a>
	</div>
</header>
