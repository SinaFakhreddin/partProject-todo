import React from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {Todo} from "../../types";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import {useDispatch} from "react-redux";
import {doneTodoHandler, editTodoHandler, isEditingHandler, removeTodo, showSnackBar} from "../../store/actionCreators";


type Props = {
    task?:Todo,
    setOpenTask:()=>void
    setOpenModal:()=>void
}

const DetailTaskComponent = ({task , setOpenTask,setOpenModal}:Props) => {
    const dispatch = useDispatch()

    return (
        <Box sx={{display:"flex", flexDirection:"column" , gap:"1rem" , border:"1px solid gray" }}>
            <Box sx={{display:"flex" , alignItems:"center" , marginTop:"1rem"}}>
                <Box sx={{display:"flex", pl:".5rem" , justifyContent:"start" , alignItems:"center"}}>
                    <Brightness1Icon color={`${task?.priority==="high" ? "error" : task?.priority==="low" ? "success" :"warning"}`}/>
                    <Typography sx={{fontSize:"12px"}}>{task?.priority}</Typography>
                </Box>
                     <Typography
                    sx={{width:"72%" , textAlign:"center"}}
                    variant={'h5'}>{task?.name}</Typography>
            </Box>
            <Box sx={{display:'flex' ,justifyContent:"center" , textAlign:"center"}}>
                <Container>
                    {task?.todoBody}
                </Container>
            </Box>
            <Box sx={{display:"flex" , justifyContent:"space-around" , marginBottom:"1rem"}}>
                <Button onClick={()=> {
                    dispatch(isEditingHandler(task?.id))
                    setOpenTask({show:false , taskId:undefined})
                    setOpenModal(true)
                }} variant={"contained"} color={'warning'}>edit Task</Button>
                <Button onClick={()=>dispatch(doneTodoHandler(task?.id))} variant={"contained"} color={'success'} >{`${task?.done ? "Undone task" : "Done Task"}`}</Button>
                <Button onClick={async ()=> {
                   await dispatch(showSnackBar({
                       showSnackBar:true,
                        message:"task deleted"
                    }))
                    setOpenTask({
                        open:false,
                        taskId:undefined
                    })
                    await dispatch(removeTodo(task?.id))}}
                        variant={"contained"} color={'error'}>Delete Task</Button>
            </Box>
        </Box>
    );
};

export default DetailTaskComponent;
