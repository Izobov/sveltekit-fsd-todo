<script lang="ts">
	import { store } from '$shared/store/model/store';
	import { derived } from 'svelte/store';
	import { name, surname } from './model';
	import { goto } from '$app/navigation';
	import { getLocale } from '$shared/localization';
	import Button from '$shared/ui/Button/Button.svelte';

	let fullName = derived([name, surname], ([$name, $surname]) => {
		return `${$name} ${$surname}`;
	});

	function login() {
		store.update((state) => ({ ...state, userName: $fullName, userId: 1}));
        goto('/');
    }
    const locale = getLocale();
</script>

<div class="app-wrapper-page">
	<h1>{$locale.Login}</h1>
	<div class="login-form">
        <div class="login-form-controller">
            
            <label for="name">{$locale.Name}</label>
            <input type="text" name="name" bind:value={$name} />
        </div>
        <div class="login-form-controller">
            <label for="surname">{$locale.Surname}</label>
            <input type="text" name="surname" bind:value={$surname} />
        </div>
        <Button on:click={login}>{$locale.Login}</Button>
	</div>
</div>

<style lang="scss">

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-controller {
            display: flex;
            flex-direction: column;
            gap: 5px;

            label {
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
</style>