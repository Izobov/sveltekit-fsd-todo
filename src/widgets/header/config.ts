import { locales } from "$shared/localization";
import { themes } from "$shared/themes/model";

export const localeOptions = locales.map((l) => ({
    value: l.code,
    label: l.name
}));

export const themeOptions = themes.map(t => ({
    value: t.id,
    label: t.name
}))