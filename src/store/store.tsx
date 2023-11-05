import { createStore, applyMiddleware, Store , combineReducers } from "redux"
import {AppState, DispatchType, TodoAction} from "../types";
import {TodoReducer} from "./reducers/todoReducer";
import thunk from "redux-thunk"
import {Provider} from "react-redux";
import {snackBarReducer} from "./reducers/snackBar";



const combinedReducers = combineReducers({
    todo:TodoReducer,
    snackBar:snackBarReducer
})




export const store : Store<AppState,TodoAction> & {dispatch:DispatchType} = createStore(combinedReducers , applyMiddleware(thunk))


export const TodoProvider = ({children}: { ReactNode })=>{

    return <Provider store={store}>{children}</Provider>

}
