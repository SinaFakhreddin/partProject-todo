import Todo, {SnackBarType} from "../../types";
import {ADD_TODO, DONE_TODO, EDIT_TODO, IS_EDITING, REMOVE_TODO, SHOW_SNACKBAR} from "../actions";

export const addTodo = (todo:Todo)=>{
    return {
        type:ADD_TODO,
        payload:todo
    }

}

export const removeTodo = (todoId:Pick<Todo,"id">)=>{

    return {
        type:REMOVE_TODO,
        payload:todoId
    }
}

export const showSnackBar = (payload:SnackBarType)=>{
    return {
        type:SHOW_SNACKBAR,
        payload
    }
}

export const doneTodoHandler = (payload:string)=>{
    return {
        type:DONE_TODO,
        payload
    }
}

export const isEditingHandler = (payload:string)=>{

    return {
        type:IS_EDITING,
        payload
    }

}

export const editTodoHandler = (payload:string)=>{
    return {
        type:EDIT_TODO,
        payload
    }
}