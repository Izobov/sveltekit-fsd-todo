import { writable } from "svelte/store";
import type { IState } from "./types";

export const store = writable<IState>({
    userId: 1,
    userName: "James Bond",
    todo: [],
})