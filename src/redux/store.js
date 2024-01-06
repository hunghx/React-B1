
// import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slices/studentSlice"
import authReducer from "./slices/authSlide";

// tạo 1 store
const store = configureStore({
    reducer : {
        "student": studentReducer,
        "auth": authReducer
    }
});

export default store;