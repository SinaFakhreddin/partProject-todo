import React from 'react';
import {Form} from "formik";
import {Field  , ErrorMessage} from "formik";
import {Box, Button, Snackbar, Typography} from "@mui/material";
import FormInput from "../../formInput";
const TodoFormTemplate = (props) => {
    return (
        <Form className={'p-1 flex flex-col mt-1'}>
            <Typography variant={'h5'}>Task Details</Typography>
            <Box sx={{display:"flex" , flexDirection:"column" , gap:".5rem"}}>
                <FormInput fieldClassName={'p-sm border-none border-bottom outline-blue'} name={'taskTitle'} placeholder={"Task Title"} errorClassName={"text-error"}/>
                <FormInput as={'textarea'} fieldClassName={'p-sm border-none border-bottom no-resize outline-blue'} name={'taskDescription'} errorClassName={"text-error"} placeholder={"Task Description"}/>
                <FormInput name={'taskGift'} fieldClassName={'p-sm border-none border-bottom no-resize outline-blue'} errorClassName={"text-error"} placeholder={"Gifts And KPI for this Task"}/>
            </Box>
            <Box sx={{marginY:"1rem"}}>
                <FormInput name={'taskPriority'} errorClassName={"text-error"} type={'radio'}/>
            </Box>
            <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center" , marginTop:".5rem"}}>
                <Button type={'submit'} color={'warning'} variant={'contained'}>Add To Tasks</Button>
            </Box>
        </Form>
    );
};

export default TodoFormTemplate;
