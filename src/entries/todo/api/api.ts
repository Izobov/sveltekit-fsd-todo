export async function getUserTodo(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    const data = await res.json();
    return data;
}