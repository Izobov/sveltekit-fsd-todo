import { store } from "$shared/store/model/store";
import type { IToDo } from "$shared/store/model/types";
import { get } from "svelte/store";

export async function getUserTodo(id: number) {
    if (!id) return [];
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        const data = await res.json() as IToDo[];
        return data;
    } catch (error) {
        return console.log(error);
    }
}

export function updateTodo(todo: IToDo) {
    const allTodo = get(store).todo;
    const item = allTodo.find((item) => item.id === todo.id);
    if (!item) return;
    item.completed = todo.completed;
    store.update((state) => ({ 
        ...state,
        todo: [...allTodo]
    }))
}