import { writable } from "svelte/store";
interface IState {
    userId: number | null;
    userName: string | null;
    todos: {userId: number, completed: boolean, title: string, id: number}[];

}
export const store = writable<IState>({
    userId: null,
    userName: null,
    todos: [],
})