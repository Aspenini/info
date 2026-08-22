const VIEW_KEY = 'checklist:mcu:view';

export const mcuView = $state({
	doomsday: false
});

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
