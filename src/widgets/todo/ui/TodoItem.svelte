<script lang="ts">
	import { updateTodo } from "$entries/todo/api";
	import type { IToDo } from "$shared/store/model/types";

    export let todo: IToDo;
    $: ({title, completed} = todo);
    function handleChange(e: any) {
        updateTodo({...todo, completed: !!(e.target as HTMLInputElement)?.checked});
    }
</script>

<div class="todo-item" class:todo-item-completed={completed}>
    <input type="checkbox"  checked={completed} on:change={(e) => handleChange(e)}>
    <div class="todo-item-title">
        {title}
    </div>
</div>

<style lang="scss">
    .todo-item {
        display: flex;
        gap: 5px;

        &-title {
            font-size: 16px;
            font-weight: bold;
        }
        &-completed {
            text-decoration: line-through;
            color: grey;
        }
    }
</style>