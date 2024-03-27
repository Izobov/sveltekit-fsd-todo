<script lang="ts">
	import { store } from '$shared/store/model/store';
	import { derived } from 'svelte/store';
	import { name, surname } from './model/stores';
	import { goto } from '$app/navigation';

	let fullName = derived([name, surname], ([$name, $surname]) => {
		return `${$name} ${$surname}`;
	});

	function login() {
		store.update((state) => ({ ...state, userName: $fullName, userId: 1}));
        goto('/');
    }
</script>

<div class="app-wrapper-page">
	<h1>Login Page</h1>
	<div class="login-form">
        <div class="login-form-controller">
            
            <label for="name">Name</label>
            <input type="text" name="name" bind:value={$name} />
        </div>
        <div class="login-form-controller">
            <label for="surname">Surname</label>
            <input type="text" name="surname" bind:value={$surname} />
        </div>
		<button on:click={login}>Login</button>
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