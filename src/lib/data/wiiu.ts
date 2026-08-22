export type TextRun = { t: string; strong?: boolean };

export const wiiu = {
	title: 'Wii U VC Injection – UWUVCI AIO',
	author: 'NomadTax',
	description:
		'Wii U VC Injection with UWUVCI AIO — compatibility lists, common keys, title keys, and ROM sources.',
	intro: 'UWUVCI AIO supports:',
	platforms: ['DS', 'GBA', 'GB', 'N64', 'SNES', 'NES', 'TG16', 'MSX', 'Wii', 'GameCube'] as const,
	compatibility: [
		{ label: 'DS', href: 'https://uwuvci.net/ndscompat' },
		{ label: 'GBA / GB', href: 'https://uwuvci.net/gbacompat' },
		{ label: 'N64', href: 'https://uwuvci.net/n64compat' },
		{ label: 'SNES', href: 'https://uwuvci.net/snescompat' },
		{ label: 'NES', href: 'https://uwuvci.net/nescompat' },
		{ label: 'TG16', href: 'https://uwuvci.net/tg16compat' },
		{ label: 'MSX', href: 'https://uwuvci.net/msxcompat' },
		{ label: 'Wii', href: 'https://uwuvci.net/wiicompat' },
		{ label: 'GameCube', href: 'https://wiki.gbatemp.net/wiki/Nintendont_Compatibility_List' }
	],
	gameBoyNotes: [
		'Game Boy games do not have a separate compatibility list',
		'Search the GBA compatibility list for your GB game of choice (e.g. Pokemon Gold)',
		'Inject using the GBA tab in UWUVCI AIO'
	],
	baseLookupNotes: [
		'Before injecting a game, check its compatibility list first',
		'Find your game on the list to see which base game works for injection',
		'Always read any notes or special instructions listed for that game',
		'Use the recommended base in UWUVCI AIO to avoid crashes or errors'
	],
	commonKeys: [
		'D7B00402659BA2ABD2CB0DB27FA2B656',
		'36262B5F49C69164E3BE2BB87C9922A7',
		'A851D78AB8F0A6FE1E93CFCEAF99A179'
	],
	commonKeyNotes: [
		[
			{
				t: 'Your personal CKeys can be obtained from otp.bin – simply press "Obtain Ckeys From otp.bin" when asked in UWUVCI AIO'
			}
		],
		[{ t: 'Dump otp.bin using a NAND dumper to get your own keys' }],
		[
			{
				t: 'It is strongly recommended to use your own keys from otp.bin',
				strong: true
			},
			{ t: ' to avoid errors, crashes, or potential bricking' }
		]
	] satisfies TextRun[][],
	titleKeyDatabase: {
		label: 'Title key database',
		href: 'https://phunlabs.github.io/'
	},
	titleKeyNotes: ['Title keys depend on the base game you select'],
	example: {
		heading: 'Example (Ocarina of Time VC)',
		steps: [
			[{ t: 'Use Donkey Kong 64 as the base' }],
			[{ t: 'Search Donkey Kong 64 on the site' }],
			[{ t: 'DO NOT', strong: true }, { t: ' use the "Copy Key" button' }],
			[{ t: 'Copy ' }, { t: 'ONLY', strong: true }, { t: ' the Title Key on the right' }]
		] satisfies TextRun[][],
		keyLabel: 'DK64 Title Key',
		key: '393396529b92ab77eb24302996bd4695'
	},
	romSources: [
		{
			label: 'Recommended',
			href: 'https://r-roms.gitlab.io/',
			note: 'older UI, easier to navigate'
		},
		{ label: 'Alternative', href: 'https://r-roms.github.io/' }
	]
};
