import { locales } from "$shared/localization";

export const localeOptions = locales.map((l) => ({
    value: l.code,
    label: l.name
}));