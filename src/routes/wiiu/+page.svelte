<script lang="ts">
	import { wiiu } from '$lib/data/wiiu';
	import { site } from '$lib/pages';
	import '$lib/styles/wiiu.css';
</script>

<svelte:head>
	<title>{wiiu.title} | {site.name}</title>
	<meta name="description" content={wiiu.description} />
</svelte:head>

<div class="container">
	<article class="article">
		<header class="article-header">
			<h1 class="page-title">{wiiu.title}</h1>
			<p class="meta">Written by <strong>{wiiu.author}</strong></p>
		</header>

		<p>{wiiu.intro}</p>
		<ul class="platform-list">
			{#each wiiu.platforms as name}
				<li>{name}</li>
			{/each}
		</ul>

		<section>
			<h2>Compatibility Lists</h2>
			<ul class="link-list">
				{#each wiiu.compatibility as item}
					<li>
						<strong>{item.label}:</strong>
						<a href={item.href} target="_blank" rel="noopener noreferrer">{item.href}</a>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>Game Boy Note</h2>
			<ul>
				{#each wiiu.gameBoyNotes as note}
					<li>{note}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>Using Compatibility Lists to Find the Base</h2>
			<ul>
				{#each wiiu.baseLookupNotes as note}
					<li>{note}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>Wii U Common Keys (CKeys)</h2>
			<p>These Common Keys may work:</p>
			<ul class="key-list">
				{#each wiiu.commonKeys as key}
					<li><code>{key}</code></li>
				{/each}
			</ul>
			<ul>
				{#each wiiu.commonKeyNotes as note}
					<li>
						{#each note as part}
							{#if part.strong}<strong>{part.t}</strong>{:else}{part.t}{/if}
						{/each}
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>Wii U Title Keys (TKeys)</h2>
			<ul>
				<li>
					<strong>{wiiu.titleKeyDatabase.label}:</strong>
					<a href={wiiu.titleKeyDatabase.href} target="_blank" rel="noopener noreferrer"
						>{wiiu.titleKeyDatabase.href}</a
					>
				</li>
				{#each wiiu.titleKeyNotes as note}
					<li>{note}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2>{wiiu.example.heading}</h2>
			<ul>
				{#each wiiu.example.steps as step}
					<li>
						{#each step as part}
							{#if part.strong}<strong>{part.t}</strong>{:else}{part.t}{/if}
						{/each}
					</li>
				{/each}
			</ul>
			<p>{wiiu.example.keyLabel}: <code>{wiiu.example.key}</code></p>
		</section>

		<section>
			<h2>ROM Sources</h2>
			<ul>
				{#each wiiu.romSources as source}
					<li>
						<strong>{source.label}:</strong>
						<a href={source.href} target="_blank" rel="noopener noreferrer">{source.href}</a>
						{#if source.note}
							({source.note})
						{/if}
					</li>
				{/each}
			</ul>
		</section>
	</article>
</div>
