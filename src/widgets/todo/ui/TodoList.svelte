<script>
	import { store } from '$shared/store/model/store';
	import { getUserTodo } from '$entries/todo/api';
	import TodoItem from './TodoItem.svelte';

	async function getTodo() {
		if (!$store.userId) return;
		const todo = await getUserTodo($store.userId);
		if (!todo) return [];
		store.update((state) => ({ ...state, todo }));
		return todo;
	}
</script>

{#if !$store.userId}
	<div>You are not logged in</div>
{:else}
	{#await getTodo()}
		...loading
	{:then}
		<div class="todo-list">
			{#if $store.todo}
				{#each $store.todo as item (item.id)}
					<TodoItem todo={item} />
				{/each}
			{/if}
		</div>
	{/await}
{/if}

<style lang="scss">
	.todo-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
</style>
