import { expect, test } from 'vitest'
import { getUserTodo } from './api'
// import { store } from "$shared/store/model/store";
// import { get } from "svelte/store";


test('getUserTodo fetches data correctly', async () => {
    const data = await getUserTodo(1);
    expect(data).toBeTruthy();
    expect(data?.length).toBeGreaterThan(0);
});

// test('updateTodo updates the store correctly', () => {
//   store.set({ todo: [{ id: 1, userId: 1, title: 'test', completed: false }] });
//   updateTodo({ id: 1, userId: 1, title: 'test', completed: true });

//   const state = get(store);
//   expect(state.todo).toEqual([{ id: 1, userId: 1, title: 'test', completed: true }]);
// });