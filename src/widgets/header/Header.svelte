<script>
	import { localeOptions } from './config';
	import { goto } from '$app/navigation';
	import { store } from '$shared/store/model/store';
	import { getLocale, setLocale } from '$shared/localization/model';
	import Button from '$shared/ui/Button.svelte';
	$: isLogged = $store.userName && $store.userId;
	function logout() {
		store.set({ userName: null, userId: null, todo: [] });
		goto('/auth');
	}
	const locale = getLocale();
	let selectedLocale = $locale.$id;
	$: setLocale(selectedLocale);
</script>

<div class="header">
	<div class="header-block header-navigation">
		<a href="/">{$locale.Home}</a>
		<a href="/about">{$locale.About}</a>
		<a href="/">{$locale.Todo}</a>
	</div>
	<div class="header-block header-actions">
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
		background-color: rgb(140, 140, 199);
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

		a,
		.header-navigation-button {
			color: white;
			text-decoration: none;
			cursor: pointer;

			&:hover {
				color: rgb(201, 201, 69);
			}
		}
	}
</style>
