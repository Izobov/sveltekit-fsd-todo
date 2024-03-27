<script>
	import { getLocale } from "$shared/localization";
	import TodoList from "$widgets/todo/ui/TodoList.svelte";
    const locale = getLocale();
	
</script>

<div class="app-wrapper-page" style="overflow: auto;">
	<h1>{$locale.Todo}</h1>
	<TodoList />
</div>
