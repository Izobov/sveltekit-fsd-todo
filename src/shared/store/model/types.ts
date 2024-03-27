export interface IState {
	userId: number | null;
	userName: string | null;
	todo: IToDo[];
}
export interface IToDo {
	userId: number;
	completed: boolean;
	title: string;
	id: number;
}
