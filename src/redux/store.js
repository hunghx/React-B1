
// import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice"

// tạo 1 store
const store = configureStore({
    reducer : {
        "student": studentReducer
    }
});

export default store;