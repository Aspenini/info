<script lang="ts">
	import {
		doomsdayTitles,
		entryIds,
		kindLabels,
		mcuIds,
		mcuSagas,
		mcuTitles,
		type TitleKind
	} from '$lib/data/mcu';
	import doomFigure from '$lib/assets/doomsday/doom.webp';
	import doomFigureLeft from '$lib/assets/doomsday/doom2.webp';
	import doomsdayLogo from '$lib/assets/doomsday/doomsday_logo.webp';
	import {
		doomsdayFromHash,
		loadMcuView,
		mcuHash,
		mcuView,
		setDoomsday
	} from '$lib/mcu-mode.svelte';
	import { site } from '$lib/pages';
	import '$lib/styles/mcu.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount, tick } from 'svelte';

	const KEY = 'checklist:mcu';
	const MODE_MS = 880;

	let watched = $state<Record<string, boolean>>({});
	let listStack = $state<HTMLDivElement>();
	let motion = $state(false);
	let doomReady = $state(false);
	let heightAnim: Animation | undefined;
	let logoFailed = $state(false);

	const doom = $derived(mcuView.doomsday);
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

	function reducedMotion() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	async function applyHash(value: boolean, replaceState = false) {
		const hash = mcuHash(value);
		if (page.url.hash === hash) return;
		await goto(hash, { replaceState, noScroll: true, keepFocus: true });
	}

	async function switchMode(value: boolean) {
		if (value === mcuView.doomsday) return;

		const el = listStack;
		const canAnim = motion && !!el && !reducedMotion();
		const from = el?.getBoundingClientRect().height ?? 0;

		setDoomsday(value);
		await applyHash(value);

		if (window.scrollY > 140) {
			window.scrollTo({ top: 0, behavior: canAnim ? 'smooth' : 'auto' });
		}

		if (!canAnim || !el) return;

		await tick();
		const to = el.getBoundingClientRect().height;
		if (Math.abs(to - from) < 1) return;

		heightAnim?.cancel();
		const anim = el.animate([{ height: `${from}px` }, { height: `${to}px` }], {
			duration: MODE_MS,
			easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
		});
		heightAnim = anim;
	}

	function modeClick(event: MouseEvent, value: boolean) {
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
			return;
		}
		event.preventDefault();
		void switchMode(value);
	}

	$effect(() => {
		const fromHash = doomsdayFromHash(page.url.hash);
		if (fromHash === null) return;
		setDoomsday(fromHash);
	});

	onMount(() => {
		const fromHash = doomsdayFromHash(window.location.hash);
		if (fromHash === null) {
			loadMcuView();
			void applyHash(mcuView.doomsday, true);
		} else {
			setDoomsday(fromHash);
		}
		try {
			watched = JSON.parse(localStorage.getItem(KEY) || '{}') ?? {};
		} catch {
			watched = {};
		}
		requestAnimationFrame(() => {
			motion = true;
			requestAnimationFrame(() => {
				doomReady = true;
			});
		});
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

<div class="container mcu-page" class:motion>
	<header class="mcu-hero">
		<div class="hero-stack">
			<div class="hero-copy" class:active={!doom} aria-hidden={doom}>
				<h1 class="hero-title">MCU</h1>
				<p class="hero-sub">Release order. Check off what you’ve watched — progress stays in this browser.</p>
			</div>
			<div class="hero-copy hero-copy-doom" class:active={doom} aria-hidden={!doom}>
				<h1 class="hero-title" class:hero-title-logo={!logoFailed}>
					{#if !logoFailed}
						<img
							class="hero-logo"
							src={doomsdayLogo}
							alt="Avengers: Doomsday"
							onerror={() => (logoFailed = true)}
						/>
					{:else}
						<span class="hero-kicker">Avengers</span>
						<span class="hero-fallback">Doomsday</span>
					{/if}
				</h1>
				<p class="hero-sub">Disney’s official must-watch list.</p>
			</div>
		</div>

		<div class="mode-toggle" class:is-doom={doom} role="group" aria-label="Watch list">
			<span class="mode-toggle-thumb"></span>
			<a
				href={mcuHash(false)}
				aria-current={!doom ? 'page' : undefined}
				onclick={(e) => modeClick(e, false)}
			>
				Release order
			</a>
			<a
				href={mcuHash(true)}
				aria-current={doom ? 'page' : undefined}
				onclick={(e) => modeClick(e, true)}
			>
				Doomsday
			</a>
		</div>
	</header>

	<div class="progress-row">
		<span>{done} / {total} watched</span>
		<button type="button" onclick={clearProgress}>Clear</button>
	</div>

	<div class="list-stack" bind:this={listStack}>
		<div id="release-order" class="list-pane" class:active={!doom} inert={doom} aria-hidden={doom}>
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
		</div>

		<div id="doomsday" class="list-pane" class:active={doom} inert={!doom} aria-hidden={!doom}>
			<ol class="watch-list doom-list">
				{#each doomsdayTitles as item, i (item.id)}
					{@render watchRow(item, i + 1, entryIds(item))}
				{/each}
			</ol>
		</div>
	</div>
</div>

<img
	class="doom-figure"
	class:active={doom && doomReady}
	src={doomFigure}
	alt=""
	aria-hidden="true"
	draggable="false"
/>
<img
	class="doom-figure doom-figure-left"
	class:active={doom && doomReady}
	src={doomFigureLeft}
	alt=""
	aria-hidden="true"
	draggable="false"
/>

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
