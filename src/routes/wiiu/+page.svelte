<svelte:head>
	<title>Wii U VC Injection – UWUVCI AIO | Info</title>
	<meta
		name="description"
		content="Wii U VC Injection with UWUVCI AIO — compatibility lists, common keys, title keys, and ROM sources."
	/>
</svelte:head>

<div class="container">
	<nav class="breadcrumb">
		<a href="/">Home</a> / Wii U
	</nav>

	<article class="article">
		<header class="article-header">
			<h1 class="page-title">Wii U VC Injection – UWUVCI AIO</h1>
			<p class="meta">Written by <strong>NomadTax</strong></p>
		</header>

		<p>UWUVCI AIO supports:</p>
		<ul class="platform-list">
			<li>DS</li>
			<li>GBA</li>
			<li>GB</li>
			<li>N64</li>
			<li>SNES</li>
			<li>NES</li>
			<li>TG16</li>
			<li>MSX</li>
			<li>Wii</li>
			<li>GameCube</li>
		</ul>

		<section>
			<h2>Compatibility Lists</h2>
			<ul class="link-list">
				<li>
					<strong>DS:</strong>
					<a href="https://uwuvci.net/ndscompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/ndscompat</a
					>
				</li>
				<li>
					<strong>GBA / GB:</strong>
					<a href="https://uwuvci.net/gbacompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/gbacompat</a
					>
				</li>
				<li>
					<strong>N64:</strong>
					<a href="https://uwuvci.net/n64compat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/n64compat</a
					>
				</li>
				<li>
					<strong>SNES:</strong>
					<a href="https://uwuvci.net/snescompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/snescompat</a
					>
				</li>
				<li>
					<strong>NES:</strong>
					<a href="https://uwuvci.net/nescompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/nescompat</a
					>
				</li>
				<li>
					<strong>TG16:</strong>
					<a href="https://uwuvci.net/tg16compat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/tg16compat</a
					>
				</li>
				<li>
					<strong>MSX:</strong>
					<a href="https://uwuvci.net/msxcompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/msxcompat</a
					>
				</li>
				<li>
					<strong>Wii:</strong>
					<a href="https://uwuvci.net/wiicompat" target="_blank" rel="noopener noreferrer"
						>https://uwuvci.net/wiicompat</a
					>
				</li>
				<li>
					<strong>GameCube:</strong>
					<a
						href="https://wiki.gbatemp.net/wiki/Nintendont_Compatibility_List"
						target="_blank"
						rel="noopener noreferrer">https://wiki.gbatemp.net/wiki/Nintendont_Compatibility_List</a
					>
				</li>
			</ul>
		</section>

		<section>
			<h2>Game Boy Note</h2>
			<ul>
				<li>Game Boy games do not have a separate compatibility list</li>
				<li>Search the GBA compatibility list for your GB game of choice (e.g. Pokemon Gold)</li>
				<li>Inject using the GBA tab in UWUVCI AIO</li>
			</ul>
		</section>

		<section>
			<h2>Using Compatibility Lists to Find the Base</h2>
			<ul>
				<li>Before injecting a game, check its compatibility list first</li>
				<li>Find your game on the list to see which base game works for injection</li>
				<li>Always read any notes or special instructions listed for that game</li>
				<li>Use the recommended base in UWUVCI AIO to avoid crashes or errors</li>
			</ul>
		</section>

		<section>
			<h2>Wii U Common Keys (CKeys)</h2>
			<p>These Common Keys may work:</p>
			<ul class="key-list">
				<li><code>D7B00402659BA2ABD2CB0DB27FA2B656</code></li>
				<li><code>36262B5F49C69164E3BE2BB87C9922A7</code></li>
				<li><code>A851D78AB8F0A6FE1E93CFCEAF99A179</code></li>
			</ul>
			<ul>
				<li>
					Your personal CKeys can be obtained from otp.bin – simply press "Obtain Ckeys From otp.bin"
					when asked in UWUVCI AIO
				</li>
				<li>Dump otp.bin using a NAND dumper to get your own keys</li>
				<li>
					<strong>It is strongly recommended to use your own keys from otp.bin</strong> to avoid errors,
					crashes, or potential bricking
				</li>
			</ul>
		</section>

		<section>
			<h2>Wii U Title Keys (TKeys)</h2>
			<ul>
				<li>
					<strong>Title key database:</strong>
					<a href="https://phunlabs.github.io/" target="_blank" rel="noopener noreferrer"
						>https://phunlabs.github.io/</a
					>
				</li>
				<li>Title keys depend on the base game you select</li>
			</ul>
		</section>

		<section>
			<h2>Example (Ocarina of Time VC)</h2>
			<ul>
				<li>Use Donkey Kong 64 as the base</li>
				<li>Search Donkey Kong 64 on the site</li>
				<li><strong>DO NOT</strong> use the "Copy Key" button</li>
				<li>Copy ONLY the Title Key on the right</li>
			</ul>
			<p>DK64 Title Key: <code>393396529b92ab77eb24302996bd4695</code></p>
		</section>

		<section>
			<h2>ROM Sources</h2>
			<ul>
				<li>
					<strong>Recommended:</strong>
					<a href="https://r-roms.gitlab.io/" target="_blank" rel="noopener noreferrer"
						>https://r-roms.gitlab.io/</a
					>
					(older UI, easier to navigate)
				</li>
				<li>
					<strong>Alternative:</strong>
					<a href="https://r-roms.github.io/" target="_blank" rel="noopener noreferrer"
						>https://r-roms.github.io/</a
					>
				</li>
			</ul>
		</section>
	</article>

	<nav class="article-nav">
		<a href="/">← Home</a>
	</nav>
</div>
