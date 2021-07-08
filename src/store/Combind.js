import  contactReducer from "./reducers/Contract-reducer"
import {combineReducers} from "redux";

const rootReducer = combineReducers(
    {
    combocontact:contactReducer
    }
)
export default rootReducer;