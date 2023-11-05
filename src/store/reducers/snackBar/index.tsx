import {boolean, string} from "yup";
import {SnackBarType} from "../../../types";
import {SHOW_SNACKBAR} from "../../actions";


const initialState:SnackBarType= {
    showSnackBar:false,
    message:""
}


export const snackBarReducer = (state=initialState , action)=>{


    switch (action.type){

        case SHOW_SNACKBAR:
            return {
                showSnackBar: action.payload.showSnackBar,
                message: action.payload.message
            }
        default:
            return state

    }

}