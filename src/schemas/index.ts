import * as Yup from "yup"


export const ValidationSchema = Yup.object({

    taskTitle:Yup.string().required().min(3).max(6666666),
    taskDescription:Yup.string().required().min(2).max(666666),
    taskGift:Yup.string().required().min(3).max(6666),
    taskPriority:Yup.string().required()
})