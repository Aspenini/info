<script lang="ts">
	import {
		doomsdayTitles,
		entryIds,
		kindKey,
		kindLabels,
		mcuIds,
		mcuSagas,
		mcuTitles,
		type TitleKind
	} from '$lib/data/mcu';
	import { loadMcuView, mcuView, setDoomsday } from '$lib/mcu-mode.svelte';
	import { site } from '$lib/pages';
	import '$lib/styles/mcu.css';
	import { onMount } from 'svelte';

	const KEY = 'checklist:mcu';

	let watched = $state<Record<string, boolean>>({});

	const doom = $derived(mcuView.doomsday);
	const visibleKinds = $derived(
		doom ? kindKey.filter((kind) => doomsdayTitles.some((item) => item.kind === kind)) : kindKey
	);
	const total = $derived(doom ? doomsdayTitles.length : mcuTitles.length);
	const done = $derived(
		doom
			? doomsdayTitles.filter((item) => entryIds(item).every((id) => watched[id])).length
			: mcuIds.reduce((n, id) => n + (watched[id] ? 1 : 0), 0)
	);

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

	function setIds(ids: string[], checked: boolean) {
		for (const id of ids) watched[id] = checked;
		persist();
	}

	function clearProgress() {
		if (!confirm('Clear all watched progress on this list?')) return;
		watched = {};
		persist();
	}

	onMount(() => {
		loadMcuView();
		try {
			watched = JSON.parse(localStorage.getItem(KEY) || '{}') ?? {};
		} catch {
			watched = {};
		}
	});
</script>

<svelte:head>
	<title>{doom ? 'Doomsday Must-Watch' : 'MCU Watch Order'} | {site.name}</title>
	<meta
		name="description"
		content={doom
			? "Disney's official Avengers: Doomsday must-watch list."
			: 'MCU movies and shows watch order — Infinity Saga through Multiverse Saga, including upcoming titles through Avengers: Secret Wars.'}
	/>
</svelte:head>

<div class="container mcu-page">
	<header class="mcu-hero">
		{#if doom}
			<p class="hero-kicker">Avengers</p>
			<h1 class="hero-title">Doomsday</h1>
			<p class="hero-sub">Disney’s official must-watch list.</p>
		{:else}
			<h1 class="hero-title">MCU</h1>
			<p class="hero-sub">Release order. Check off what you’ve watched — progress stays in this browser.</p>
		{/if}

		<div class="mode-toggle" role="group" aria-label="Watch list">
			<button type="button" aria-pressed={!doom} onclick={() => setDoomsday(false)}>Release order</button>
			<button type="button" aria-pressed={doom} onclick={() => setDoomsday(true)}>Doomsday</button>
		</div>

		<ul class="kind-key" aria-label="Media types">
			{#each visibleKinds as kind}
				<li>{kindLabels[kind]}</li>
			{/each}
		</ul>
	</header>

	<div class="progress-row">
		<span>{done} / {total} watched</span>
		<button type="button" onclick={clearProgress}>Clear</button>
	</div>

	{#if doom}
		<ol class="watch-list">
			{#each doomsdayTitles as item, i (item.id)}
				{@render watchRow(item, i + 1, entryIds(item))}
			{/each}
		</ol>
	{:else}
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
								{@render watchRow(item, item.n, [item.id])}
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
	{/if}
</div>

{#snippet watchRow(
	item: { title: string; year: string; kind: TitleKind; altUniverse?: boolean },
	n: number,
	ids: string[]
)}
	<li class="watch-item">
		<label>
			<input
				type="checkbox"
				checked={ids.every((id) => !!watched[id])}
				onchange={(e) => setIds(ids, (e.currentTarget as HTMLInputElement).checked)}
			/>
			<span class="watch-num">{n}</span>
			<span class="watch-title">
				{item.title}{#if item.altUniverse}<abbr class="watch-alt" title="Alternate universe">*</abbr>{/if}
			</span>
			<span class="watch-kind">{kindLabels[item.kind]}</span>
			<span class="watch-year">{item.year}</span>
		</label>
	</li>
{/snippet}
