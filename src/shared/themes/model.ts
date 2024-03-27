import { getContext, setContext } from "svelte";
import { writable, type Writable } from "svelte/store";

export const themes = [
	{ id: 'dark', name: 'Dark', css: 'dark' },
	{ id: 'light', name: 'Light', css: 'light' },
];

export function setTheme(locale: string) {
	const theme = themes.find((l) => l.id === locale)?.css || 'light';
	let themeContext = getContext('theme') as undefined | Writable<string>;
	if (!themeContext) {
		themeContext = writable();
		setContext('theme', themeContext);
	}
	themeContext.set(theme);
}

