import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers: {
        user : (state, action)=>{
            console.log("action.payload:",action.payload);
            state = {...state, userGrade : action.payload.userGrade, userName : action.payload.userName, userPassword : action.payload.userPassword}
            console.log("newState", state);
            return state;
        }
    }  
})

export const getUser = state=>state.user;
export const {user} = userSlice.actions;
export default userSlice.reducer;