export interface IState {
	userId?: number;
	userName?: string;
	todo: IToDo[];
}
export interface IToDo {
	userId: number;
	completed: boolean;
	title: string;
	id: number;
}
