<script lang="ts">
	import {
		kindKey,
		kindLabels,
		mcuIds,
		mcuSagas,
		mcuTitles,
		type McuTitle
	} from '$lib/data/mcu';
	import { site } from '$lib/pages';
	import '$lib/styles/mcu.css';
	import { onMount } from 'svelte';

	const KEY = 'checklist:mcu';

	let watched = $state<Record<string, boolean>>({});

	const done = $derived(mcuIds.reduce((n, id) => n + (watched[id] ? 1 : 0), 0));
	const total = mcuTitles.length;

	function persist() {
		const out: Record<string, boolean> = {};
		for (const [id, on] of Object.entries(watched)) {
			if (on) out[id] = true;
		}
		try {
			localStorage.setItem(KEY, JSON.stringify(out));
		} catch {
			/* ignore quota */
		}
	}

	function toggle(item: McuTitle, checked: boolean) {
		watched[item.id] = checked;
		persist();
	}

	function clearProgress() {
		if (!confirm('Clear all watched progress on this list?')) return;
		watched = {};
		persist();
	}

	onMount(() => {
		try {
			watched = JSON.parse(localStorage.getItem(KEY) || '{}') ?? {};
		} catch {
			watched = {};
		}
	});
</script>

<svelte:head>
	<title>MCU Watch Order | {site.name}</title>
	<meta
		name="description"
		content="MCU movies and shows watch order — Infinity Saga through Multiverse Saga, including upcoming titles through Avengers: Secret Wars."
	/>
</svelte:head>

<div class="container mcu-page">
	<header class="mcu-hero">
		<h1 class="hero-title">MCU</h1>
		<p class="hero-sub">Release order. Check off what you’ve watched — progress stays in this browser.</p>
		<ul class="kind-key" aria-label="Media types">
			{#each kindKey as kind}
				<li>{kindLabels[kind]}</li>
			{/each}
		</ul>
	</header>

	<div class="progress-row">
		<span>{done} / {total} watched</span>
		<button type="button" onclick={clearProgress}>Clear</button>
	</div>

	<nav class="jump-nav" aria-label="Jump to phase">
		<a href="#infinity-saga">Infinity</a>
		<a href="#phase-one">P1</a>
		<a href="#phase-two">P2</a>
		<a href="#phase-three">P3</a>
		<a href="#multiverse-saga">Multiverse</a>
		<a href="#phase-four">P4</a>
		<a href="#phase-five">P5</a>
		<a href="#phase-six">P6</a>
		<a href="#upcoming">Upcoming</a>
	</nav>

	{#each mcuSagas as saga (saga.id)}
		<section
			class="saga"
			class:saga-infinity={saga.id === 'infinity-saga'}
			class:saga-multiverse={saga.id === 'multiverse-saga'}
			id={saga.id}
		>
			<h2 class="saga-title">{saga.symbol ? `${saga.symbol} ` : ''}{saga.name}</h2>

			{#each saga.phases as phase (phase.id)}
				<section class="phase" class:phase-upcoming={phase.upcoming} id={phase.id}>
					<h3 class="phase-title">{phase.name}</h3>
					<ol class="watch-list">
						{#each phase.titles as item (item.id)}
							<li class="watch-item">
								<label>
									<input
										type="checkbox"
										checked={!!watched[item.id]}
										onchange={(e) =>
											toggle(item, (e.currentTarget as HTMLInputElement).checked)}
									/>
									<span class="watch-num">{item.n}</span>
									<span class="watch-title">
										{item.title}{#if item.altUniverse}<abbr class="watch-alt" title="Alternate universe">*</abbr>{/if}
									</span>
									<span class="watch-kind">{kindLabels[item.kind]}</span>
									<span class="watch-year">{item.year}</span>
								</label>
							</li>
						{/each}
					</ol>
				</section>
			{/each}
		</section>
	{/each}

	<aside class="footnote">
		<p>
			<strong>X-Men ’97</strong> and <strong>Your Friendly Neighborhood Spider-Man</strong> take
			place in alternate universes rather than the MCU’s main Sacred Timeline, but they’re Marvel
			Studios Animation projects released as part of the Multiverse Saga.
		</p>
	</aside>
</div>
