import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = true;
  export const navPageSlice=createSlice({
    name: "navpage",
    initialState,
    reducers: {
        navPage: (state, action)=>{
            console.log(action.payload);
            if(action.payload=="true"){
                state= true;
            }
            else{
                state= false;
            }
            return state;
        }
    }
  });
//   export const selectTasks=state=>state.cars;
export const selectPage = state=>state.navpage;

  export const {navPage} = navPageSlice.actions;
  export default navPageSlice.reducer;