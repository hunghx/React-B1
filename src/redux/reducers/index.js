import { combineReducers } from "redux";
import studentReducer from "./studentReducers";


const reducers = combineReducers({student: studentReducer})

export default reducers;