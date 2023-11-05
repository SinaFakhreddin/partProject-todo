import {Todo, TodoAction} from "../../../types";
import {ADD_TODO, DONE_TODO, EDIT_TODO, IS_EDITING, REMOVE_TODO} from "../../actions";


const initialState : Todo[] = []


export const TodoReducer = (state=initialState , action)=>{


    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]

        case DONE_TODO:
            return state?.map((todo)=>{
                if (todo.id===action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                } else {
                    return todo
                }
            })
        case IS_EDITING:
            return state?.map((todo)=>{
                if (todo.id===action.payload){
                    return {
                        ...todo,
                        isEditing:true
                    }
                } else {
                    return todo
                }
            })

        case EDIT_TODO :
            console.log("action",action)
            return state?.map((todo)=>{
                if (todo.id===action.payload.id){
                    return {
                        ...action.payload,
                    }
                }else {
                    return todo
                }
            })
        case REMOVE_TODO:
            return state?.filter((todo)=>todo.id!==action.payload)
        default:
            return state;

    }


}