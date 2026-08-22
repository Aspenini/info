const VIEW_KEY = 'checklist:mcu:view';

export const MCU_HASH = {
	release: '#release-order',
	doomsday: '#doomsday'
} as const;

export const mcuView = $state({
	doomsday: false
});

export function mcuHash(doomsday: boolean) {
	return doomsday ? MCU_HASH.doomsday : MCU_HASH.release;
}

export function doomsdayFromHash(hash: string): boolean | null {
	if (hash === MCU_HASH.doomsday) return true;
	if (hash === MCU_HASH.release) return false;
	return null;
}

export function setDoomsday(value: boolean) {
	mcuView.doomsday = value;
	try {
		localStorage.setItem(VIEW_KEY, value ? 'doomsday' : 'release');
	} catch {
		/* ignore quota */
	}
}

export function loadMcuView() {
	try {
		mcuView.doomsday = localStorage.getItem(VIEW_KEY) === 'doomsday';
	} catch {
		/* ignore */
	}
}
