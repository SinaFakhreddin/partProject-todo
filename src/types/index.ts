export type Priority = {
    priority : "high" | "medium" | "low"
}


export interface Todo {
    name:string,
    todoBody:string,
    Priority:Priority,
    done:boolean,
    id:string,
    isEditing:boolean
}


export type TodoAction = {
    type:string,
    payload:Todo | Pick<Todo ,"id">
}

export type AppState = {
    todoList:Todo[]
}

export type SnackBarType = {
    showSnackBar:boolean,
    message:string
}

export type ModalTaskOpened = {
    open:boolean,
    taskId:string | undefined
}

export type DispatchType = (args:TodoAction)=>TodoAction