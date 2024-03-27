<script>
	import { localeOptions } from './config';
	import { goto } from '$app/navigation';
	import { store } from '$shared/store/model/store';
	import { getLocale, setLocale } from '$shared/localization/model';
	import Button from '$shared/ui/Button/Button.svelte';
	import { setTheme, themes } from '$shared/themes/model';
	import { getContext } from 'svelte';
	$: isLogged = $store.userName && $store.userId;
	function logout() {
		store.set({ todo: [] });
		goto('/auth');
	}
	const locale = getLocale();
	let theme = getContext('theme');
	let currentTheme = $theme;
	let selectedLocale = $locale.$id;
	$: themeOptions = themes.map(({id, name}) => ({ value: id, label: name }));
	$: setLocale(selectedLocale);
	$: setTheme(currentTheme);
</script>

<div class="header">
	<div class="header-block header-navigation">
		<a href="/">{$locale.Home}</a>
		<a href="/about">{$locale.About}</a>
		<a href="/">{$locale.Todo}</a>
	</div>
	<div class="header-block header-actions">
		<select bind:value={currentTheme}>
			{#each themeOptions as item}
				<option value={item.value}>{$locale[item.label]} </option>
			{/each}
		</select>
		<select bind:value={selectedLocale}>
			{#each localeOptions as item}
				<option value={item.value}>{item.label} </option>
			{/each}
		</select>
		{#if isLogged}
			<Button on:click={logout}>{$locale.Logout}</Button>
			<div class="header-user">
				{$store.userName}
			</div>
		{:else}
			<Button on:click={() => goto("/auth")}>{$locale.Login}</Button>
		{/if}
	</div>
</div>

<style lang="scss">
	.header {
		width: 100%;
		height: 60px;
		display: flex;
		background-color: var(--secondary-bg-color);
		padding: 5px 20px;
		justify-content: space-between;
		gap: 20px;

		.header-block {
			display: flex;
			gap: 20px;
			align-items: center;
			flex: 1;
		}

		.header-navigation {
			justify-content: flex-start;
		}

		.header-actions,
		.header-user {
			justify-content: flex-end;
		}

		.header-user {
			font-size: 20px;
			font-weight: bold;
		}

		a {
			color: var(--text-color-light);
			text-decoration: none;
			cursor: pointer;

			&:hover {
				color: var(--secondary-color);
			}
		}
	}
</style>
