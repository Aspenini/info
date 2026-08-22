export const site = {
	name: 'Info',
	host: 'info.aspenini.com',
	tagline: 'Notes, lists, and guides',
	description: 'Wii U VC injection guide and MCU watch order.'
};

export const pages = [
	{ slug: 'wiiu', title: 'Wii U', href: '/wiiu/' },
	{ slug: 'mcu', title: 'MCU', href: '/mcu/' }
] as const;

export type PageSlug = (typeof pages)[number]['slug'];
export type ThemeId = 'hub' | PageSlug;

export function themeFromPath(pathname: string): ThemeId {
	const slug = pathname.replace(/^\/+|\/+$/g, '').split('/')[0];
	if (pages.some((page) => page.slug === slug)) return slug as PageSlug;
	return 'hub';
}
