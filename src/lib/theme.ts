export type ThemeId = 'hub' | 'homebrew' | 'mcu';

export function themeFromPath(pathname: string): ThemeId {
	if (pathname.startsWith('/wiiu') || pathname.startsWith('/homebrew')) return 'homebrew';
	if (pathname.startsWith('/mcu') || pathname.startsWith('/movies')) return 'mcu';
	return 'hub';
}
