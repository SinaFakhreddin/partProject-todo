import React from 'react';
import {Badge, Box, Button, Typography} from "@mui/material";
import {DispatchType} from "../../types";
import {useDispatch} from "react-redux";
import {doneTodoHandler, isEditingHandler} from "../../store/actionCreators";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Brightness1Icon from "@mui/icons-material/Brightness1";


type TodoListItemProps = {
    title:string,
    subtitle:string,
    giftTask:string,
    id:string,
    priority:string,
    done:boolean,
    setOpenModal:()=>void
    setOpenTask:()=>void


}


const TodoListItem = ({giftTask,id,subtitle,title,priority,done , setOpenModal,setOpenTask}:TodoListItemProps) => {

    const dispatch = useDispatch()
    const taskDoneHandler = (e)=>{
        e.stopPropagation()
        dispatch(doneTodoHandler(id))
    }


    const openModalHandler = (e)=>{
        e.stopPropagation()
        setOpenModal(true)
        dispatch(isEditingHandler(id))
    }


    return (
        <Box onClick={()=>setOpenTask({open:true , taskId:id})} sx={{display:"flex" , flexDirection:"column" , gap:".375rem" , border:"1px solid gray" , borderRadius:".375rem" , my:".375rem" , cursor:"pointer"}}>
            <Box sx={{display:"flex" , justifyContent:"space-between" , px:".375rem" , alignItems:'center'}}>
                <Typography variant={"h5"}>{title}</Typography>
                <Box sx={{display:"flex" ,alignItems:"center"}}>
                    <Brightness1Icon color={`${priority==="high" ? "error" : priority==="low" ? "success" :"warning"}`}/>
                    <Typography >
                        {priority}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{display:"flex" , justifyContent:"space-between" , px:".375rem" , alignItems:"center" , marginBottom:".375rem"}}>
                <Box>
                    {subtitle}
                </Box>
                <Box sx={{display:"flex" , gap:".375rem"}}>
                    <Button variant={'contained'} color={`${done ? "success" : "warning"}`} onClick={taskDoneHandler} size={'small'}>
                        {
                            done ? "UnDone" : "Done"
                        }
                    </Button>
                    <Button onClick={openModalHandler} variant={'contained'} color={'success'} size={'small'}>Edit Task</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default TodoListItem;
