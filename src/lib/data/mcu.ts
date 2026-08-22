export type TitleKind = 'movie' | 'series' | 'animated' | 'special';

export const kindLabels: Record<TitleKind, string> = {
	movie: 'Movie',
	series: 'Series',
	animated: 'Animated',
	special: 'Special'
};

export const kindKey = ['movie', 'series', 'animated', 'special'] as const satisfies TitleKind[];

export interface McuTitle {
	id: string;
	n: number;
	title: string;
	year: string;
	kind: TitleKind;
	altUniverse?: boolean;
}

export interface McuPhase {
	id: string;
	name: string;
	upcoming?: boolean;
	titles: McuTitle[];
}

export interface McuSaga {
	id: string;
	name: string;
	symbol?: string;
	phases: McuPhase[];
}

function title(
	id: string,
	n: number,
	name: string,
	year: string,
	kind: TitleKind,
	altUniverse = false
): McuTitle {
	return { id, n, title: name, year, kind, altUniverse };
}

export const mcuSagas: McuSaga[] = [
	{
		id: 'infinity-saga',
		name: 'The Infinity Saga',
		symbol: '∞',
		phases: [
			{
				id: 'phase-one',
				name: 'Phase One',
				titles: [
					title('iron-man', 1, 'Iron Man', '2008', 'movie'),
					title('incredible-hulk', 2, 'The Incredible Hulk', '2008', 'movie'),
					title('iron-man-2', 3, 'Iron Man 2', '2010', 'movie'),
					title('thor', 4, 'Thor', '2011', 'movie'),
					title('cap-first-avenger', 5, 'Captain America: The First Avenger', '2011', 'movie'),
					title('avengers', 6, 'The Avengers', '2012', 'movie')
				]
			},
			{
				id: 'phase-two',
				name: 'Phase Two',
				titles: [
					title('iron-man-3', 7, 'Iron Man 3', '2013', 'movie'),
					title('thor-dark-world', 8, 'Thor: The Dark World', '2013', 'movie'),
					title('cap-winter-soldier', 9, 'Captain America: The Winter Soldier', '2014', 'movie'),
					title('gotg', 10, 'Guardians of the Galaxy', '2014', 'movie'),
					title('age-of-ultron', 11, 'Avengers: Age of Ultron', '2015', 'movie'),
					title('ant-man', 12, 'Ant-Man', '2015', 'movie')
				]
			},
			{
				id: 'phase-three',
				name: 'Phase Three',
				titles: [
					title('civil-war', 13, 'Captain America: Civil War', '2016', 'movie'),
					title('doctor-strange', 14, 'Doctor Strange', '2016', 'movie'),
					title('gotg-2', 15, 'Guardians of the Galaxy Vol. 2', '2017', 'movie'),
					title('homecoming', 16, 'Spider-Man: Homecoming', '2017', 'movie'),
					title('ragnarok', 17, 'Thor: Ragnarok', '2017', 'movie'),
					title('black-panther', 18, 'Black Panther', '2018', 'movie'),
					title('infinity-war', 19, 'Avengers: Infinity War', '2018', 'movie'),
					title('ant-man-wasp', 20, 'Ant-Man and the Wasp', '2018', 'movie'),
					title('captain-marvel', 21, 'Captain Marvel', '2019', 'movie'),
					title('endgame', 22, 'Avengers: Endgame', '2019', 'movie'),
					title('far-from-home', 23, 'Spider-Man: Far From Home', '2019', 'movie')
				]
			}
		]
	},
	{
		id: 'multiverse-saga',
		name: 'The Multiverse Saga',
		phases: [
			{
				id: 'phase-four',
				name: 'Phase Four',
				titles: [
					title('wandavision', 24, 'WandaVision', '2021', 'series'),
					title('fatws', 25, 'The Falcon and the Winter Soldier', '2021', 'series'),
					title('loki-1', 26, 'Loki — Season 1', '2021', 'series'),
					title('black-widow', 27, 'Black Widow', '2021', 'movie'),
					title('what-if-1', 28, 'What If...? — Season 1', '2021', 'animated'),
					title('shang-chi', 29, 'Shang-Chi and the Legend of the Ten Rings', '2021', 'movie'),
					title('eternals', 30, 'Eternals', '2021', 'movie'),
					title('hawkeye', 31, 'Hawkeye', '2021', 'series'),
					title('no-way-home', 32, 'Spider-Man: No Way Home', '2021', 'movie'),
					title('moon-knight', 33, 'Moon Knight', '2022', 'series'),
					title('multiverse-of-madness', 34, 'Doctor Strange in the Multiverse of Madness', '2022', 'movie'),
					title('ms-marvel', 35, 'Ms. Marvel', '2022', 'series'),
					title('love-and-thunder', 36, 'Thor: Love and Thunder', '2022', 'movie'),
					title('i-am-groot-1', 37, 'I Am Groot — Season 1', '2022', 'animated'),
					title('she-hulk', 38, 'She-Hulk: Attorney at Law', '2022', 'series'),
					title('werewolf-by-night', 39, 'Werewolf by Night', '2022', 'special'),
					title('wakanda-forever', 40, 'Black Panther: Wakanda Forever', '2022', 'movie'),
					title('gotg-holiday', 41, 'The Guardians of the Galaxy Holiday Special', '2022', 'special')
				]
			},
			{
				id: 'phase-five',
				name: 'Phase Five',
				titles: [
					title('quantumania', 42, 'Ant-Man and the Wasp: Quantumania', '2023', 'movie'),
					title('gotg-3', 43, 'Guardians of the Galaxy Vol. 3', '2023', 'movie'),
					title('secret-invasion', 44, 'Secret Invasion', '2023', 'series'),
					title('i-am-groot-2', 45, 'I Am Groot — Season 2', '2023', 'animated'),
					title('loki-2', 46, 'Loki — Season 2', '2023', 'series'),
					title('the-marvels', 47, 'The Marvels', '2023', 'movie'),
					title('what-if-2', 48, 'What If...? — Season 2', '2023', 'animated'),
					title('echo', 49, 'Echo', '2024', 'series'),
					title('xmen-97-1', 50, "X-Men '97 — Season 1", '2024', 'animated', true),
					title('deadpool-wolverine', 51, 'Deadpool & Wolverine', '2024', 'movie'),
					title('agatha', 52, 'Agatha All Along', '2024', 'series'),
					title('what-if-3', 53, 'What If...? — Season 3', '2024', 'animated'),
					title(
						'yfn-spiderman-1',
						54,
						'Your Friendly Neighborhood Spider-Man — Season 1',
						'2025',
						'animated',
						true
					),
					title('brave-new-world', 55, 'Captain America: Brave New World', '2025', 'movie'),
					title('daredevil-ba-1', 56, 'Daredevil: Born Again — Season 1', '2025', 'series'),
					title('thunderbolts', 57, 'Thunderbolts*', '2025', 'movie'),
					title('ironheart', 58, 'Ironheart', '2025', 'series')
				]
			},
			{
				id: 'phase-six',
				name: 'Phase Six',
				titles: [
					title('fantastic-four', 59, 'The Fantastic Four: First Steps', '2025', 'movie'),
					title('eyes-of-wakanda', 60, 'Eyes of Wakanda', '2025', 'animated'),
					title('marvel-zombies', 61, 'Marvel Zombies — Season 1', '2025', 'animated'),
					title('wonder-man', 62, 'Wonder Man — Season 1', '2026', 'series'),
					title('daredevil-ba-2', 63, 'Daredevil: Born Again — Season 2', '2026', 'series'),
					title('punisher-olk', 64, 'The Punisher: One Last Kill', '2026', 'special'),
					title('brand-new-day', 65, 'Spider-Man: Brand New Day', '2026', 'movie')
				]
			},
			{
				id: 'upcoming',
				name: 'Upcoming',
				upcoming: true,
				titles: [
					title('xmen-97-2', 66, "X-Men '97 — Season 2", '2026', 'animated', true),
					title(
						'yfn-spiderman-2',
						67,
						'Your Friendly Neighborhood Spider-Man — Season 2',
						'2026',
						'animated',
						true
					),
					title('visionquest', 68, 'VisionQuest', 'October 14, 2026', 'series'),
					title('doomsday', 69, 'Avengers: Doomsday', 'December 18, 2026', 'movie'),
					title('daredevil-ba-3', 70, 'Daredevil: Born Again — Season 3', '2027', 'series'),
					title('secret-wars', 71, 'Avengers: Secret Wars', 'December 17, 2027', 'movie')
				]
			}
		]
	}
];

export const mcuTitles: McuTitle[] = mcuSagas.flatMap((saga) =>
	saga.phases.flatMap((phase) => phase.titles)
);

export const mcuIds = mcuTitles.map((t) => t.id);

