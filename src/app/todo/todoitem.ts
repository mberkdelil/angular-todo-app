// export class TodoItem {
//     id: number;
//     title: string;
//     completed: boolean

//     constructor(id: number, title: string, completed: boolean) {
//         this.id = id;
//         this.title = title;
//         this.completed = completed;
//     }
// }

// const td = new TodoItem(1, "angular", true);

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean
}