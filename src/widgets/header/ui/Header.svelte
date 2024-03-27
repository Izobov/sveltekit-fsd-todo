<script>
	import { goto } from '$app/navigation';
	import { store } from '$shared/store/model/store';
	$: isLogged = $store.userName && $store.userId;
    function logout() {
        store.set({userName: null, userId: null, todo: []});
        goto('/auth');
    }
</script>

<div class="header">
	<div class="header-block header-navigation">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/">Todo</a>
	</div>
	<div class="header-block header-actions">
		{#if isLogged}
			<div class="header-navigation-button" on:click={logout}>Logout</div>
            <div class="header-user">
                {$store.userName}
            </div>
		{:else}
			<a href="/auth">Sign In</a>
		{/if}
	</div>
</div>

<style lang="scss">
	.header {
		width: 100%;
		height: 60px;
		display: flex;
		background-color: rgb(101, 101, 255);
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
