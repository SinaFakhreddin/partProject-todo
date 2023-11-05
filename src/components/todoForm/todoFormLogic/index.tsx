import {withFormik} from "formik";
import TodoFormTemplate from "../todoFormTemplate";
import {ValidationSchema} from "../../../schemas";
import {addTodo, editTodoHandler, showSnackBar} from "../../../store/actionCreators";
import {Todo} from "../../../types";
import { v4 as uuidv4 } from 'uuid';

export const TodoFormLogic = withFormik({
    mapPropsToValues:(props)=>{
        console.log("props",props)
        return {
            taskTitle:"" || props?.todoEditing?.name,
            taskGift:"" || props?.todoEditing?.todoGift,
            taskDescription:"" || props?.todoEditing?.todoBody,
            taskPriority:""||props?.todoEditing?.priority
        }
    },
    handleSubmit:async (values, {props})=>{
        if (props.todoEditing){
         const editedTodo = {
             name:values.taskTitle,
             todoBody:values.taskDescription,
             priority:values.taskPriority,
             todoGift:values.taskGift,
             done:false,
             isEditing:false,
             id:props?.todoEditing?.id
         }
        await props.dispatch(editTodoHandler(editedTodo))
            await props.dispatch(showSnackBar({showSnackBar:true,
                message:"Task Edited"}))
            await props.setOpenModal(false)

        } else {
            const updatedTask:Todo = {
                name:values.taskTitle,
                todoBody:values.taskDescription,
                priority:values.taskPriority,
                todoGift:values.taskGift,
                done:false,
                isEditing:false,
                id:uuidv4()
            }
            await props.dispatch(addTodo(updatedTask))
            await props.dispatch(showSnackBar({showSnackBar:true,
                message:"Task Added"}))
            await props.setOpenModal(false)
        }
    },
    validationSchema:ValidationSchema
})(TodoFormTemplate)
