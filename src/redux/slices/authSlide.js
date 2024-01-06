import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../api/instance";


export const handleSignUp = createAsyncThunk("user/sign-up", async(data)=>{
        try{
            let response = await instance.post("auth/sign-up",data,{headers : {
                "Content-Type" :"multipart/form-data"
            }})
        }catch( err){
            console.log("errr",err);
        }
})
export const handleEditProfile = createAsyncThunk("user/profile", async(data)=>{
        try{
            let response = await instance.post("auth/profile",data,{headers : {
                "Content-Type" :"multipart/form-data",
                "Authorization": "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJodW5naHgiLCJpYXQiOjE3MDQ1NDgwOTEsImV4cCI6MTcwNDYzNDQ5MX0.IRAjRxNcSye-y-0WhYHgIy_Hzr2abdKTs_sup9NVip2p5NvEyeUpkqIZN0PA5djRF1ESSGfk24nEoUE36qYTZw"
            }})
        }catch( err){
            console.log("errr",err);
        }
})

const initState = {
    userInfo : {},
    isLoading : false,
    message: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState:initState,
    extraReducers: (builder) =>{
        builder.addCase(handleSignUp.pending,(state,action)=>{
                state.isLoading = true;
        })
        .addCase(handleSignUp.fulfilled,(state,action)=>{
            state.isLoading =  false;
            state.message = "Đăng kí thành công"
        });
    }
})

export default authSlice.reducer;