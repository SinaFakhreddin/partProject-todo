import React from 'react';
import {Field  , ErrorMessage} from "formik";
import {Box} from "@mui/material";

type FormInputProps = {
    name:string,
    labelClassName?:string,
    label:string,
    type?:string,
    autoComplete?:boolean,
    errorClassName?:string,
    fieldClassName?:string,
    as:string
    placeholder?:string

}

const FormInput = (props:FormInputProps) => {
    return (
                    <>
                        {
                            props.type!=="radio"?
                                <>
                                    <label htmlFor={props?.name} className={` ${props?.labelClassName ? props?.labelClassName : ""}`}>
                                        {props?.label}
                                    </label>
                                    <div >
                                        <Field placeholder={props.placeholder} as={props.as} id={props?.name} name={props?.name} type={props?.type} autoComplete={props?.autoComplete} required
                                               className={`w-full  ${props?.fieldClassName}`}/>
                                        <ErrorMessage name={props.name}  component={"div"} className={`${props?.errorClassName}`}/>
                                    </div>
                                </> :
                                <div className={'flex justify-around flex-col'}>
                                    <ErrorMessage name={props.name}  component={"div"} className={`${props?.errorClassName}`}/>
                                   <Box sx={{display:"flex" , justifyContent:"space-around"}}>
                                       <label>
                                           <Field type="radio" name={props.name} value="low" />
                                           low
                                       </label>
                                       <label>
                                           <Field type="radio" name={props.name} value="high" />
                                           high
                                       </label>
                                       <label>
                                           <Field type="radio" name={props.name} value="medium" />
                                           medium
                                       </label>
                                   </Box>
                                </div>
                        }
                    </>


    );
};

export default FormInput;
