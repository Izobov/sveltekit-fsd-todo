import { getContext, setContext } from 'svelte';
import { en, ru } from '.';
import { writable, type Writable } from 'svelte/store';
import type { ILocalization } from './types';

export const locales = [
	{ code: 'en', name: 'English', words: en },
	{ code: 'ru', name: 'Русский', words: ru }
];

export function setLocale(locale: string) {
	const words = locales.find((l) => l.code === locale)?.words || en;
	const store = getLocale();
	store.set(words);
}

export function getLocale(): Writable<ILocalization> {
	let store = getContext('locale') as undefined | Writable<ILocalization>;
	if (!store) {
        store = writable(en);
        setContext('locale', store);
	}
	return store;
}
