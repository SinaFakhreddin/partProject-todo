import './App.css'
import HelloWorld from "./components/helloWorld";
import {Box, Button, Container, Snackbar} from "@mui/material";
import MyModalComponent from "./components/myModalComponent";
import React, {useEffect, useState} from "react";
import {TodoFormLogic} from "./components/todoForm/todoFormLogic";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ModalTaskOpened, Todo} from "./types";
import {showSnackBar} from "./store/actionCreators";
import TodoListItem from "./components/todoListItem";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DetailTaskComponent from "./components/detailTaskComponent";
import {
    addTaskButtonStyle,
    todosContainerStyle,
    todosParentStyle,
    viewAllButtonStyle,
    viewAllTaskButtonStyle
} from "./constants/style";

function App() {
    const [openModal, setOpenModal] = useState<Boolean>(false);
    const [showDoneTask, setShowDoneTask] = useState<Boolean>(false);

    const [openTask, setOpenTask] = useState<ModalTaskOpened>({
        open:false,
        taskId:undefined
    });
    const {showMySnackBar , message ,todos,todoEditing,doneTasks , selectedTask} = useSelector(state=>({
        showMySnackBar:state?.snackBar?.showSnackBar,
        message:state?.snackBar?.message,
        todos:state?.todo,
        todoEditing:state?.todo?.find((todo)=>todo?.isEditing),
        doneTasks:state?.todo?.filter((todo)=>todo?.done),
        selectedTask:state?.todo?.find((todo)=>todo?.id===openTask.taskId)
    }), shallowEqual)
    const dispatch  = useDispatch()


    useEffect(() => {
        setTimeout(()=>dispatch(showSnackBar({showSnackBar:false,message:""})) , 2000)
    }, [showMySnackBar]);



          return (
              <>

                  <Box sx={{display:"flex" , justifyContent:`${todos?.length > 0 ? "space-between" : "center"}` , alignItems:"center" , marginTop:"2rem"}}>
                      {todos?.length>"0" &&
                      <Box sx={viewAllButtonStyle}>
                          <Button onClick={()=>setShowDoneTask(!showDoneTask)} {...viewAllTaskButtonStyle} color={`${showDoneTask ? "primary" : "success"}`}>{`${showDoneTask ? "View All Task" : "View Done Task"}`}</Button>
                      </Box>
                      }
                      <HelloWorld todosLength={todos?.length}/>
                  </Box>
                  <Box sx={todosParentStyle}>
                      {
                        todos?.length || doneTasks.length?
                            <>
                                <Container sx={todosContainerStyle}>
                                    <Box sx={{overflowY:"auto"}}>
                                        {
                                           !showDoneTask ? todos?.map((todo:Todo )=> <TodoListItem setOpenTask={setOpenTask}  setOpenModal={setOpenModal} title={todo?.name}  subtitle={todo?.todoBody} id={todo?.id} giftTask={todo.todoGift} priority={todo?.priority} done={todo?.done}/>)
                                               :
                                               doneTasks?.map((todo:Todo )=> <TodoListItem setOpenTask={setOpenTask}  setOpenModal={setOpenModal} title={todo?.name}  subtitle={todo?.todoBody} id={todo?.id} giftTask={todo.todoGift} priority={todo?.priority} done={todo?.done}/>)
                                        }
                                    </Box>
                                    <AddCircleRoundedIcon onClick={()=>setOpenModal(true)} color={'error'} fontSize={"large"} sx={addTaskButtonStyle} />
                                </Container>
                            </>
                            :
                            <Button onClick={()=>setOpenModal(true)} variant="contained"  color={"warning"}>Create Your First Task ;)</Button>
                      }
                      <MyModalComponent children={<TodoFormLogic dispatch={dispatch} todoEditing={todoEditing} setOpenModal={setOpenModal}/>} openModal={openModal} closeModal={()=>setOpenModal(false)}/>
                  </Box>
                  <Snackbar message={message} open={showMySnackBar} />
              </>
          )


}

export default App
