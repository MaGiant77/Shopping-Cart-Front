import { createSlice } from "@reduxjs/toolkit";

const initialState = [

  ];
// let nextId=4;
  export const addCarsSlice=createSlice({
    name: "cars",
    initialState,
    reducers: {
        addCars: (state, action)=>{
            const index = state.findIndex(t => t.productName === action.payload.productName);
            if (index !== -1) {
                state[index] = {...state[index], value : state[index].value+1}
            }
        },
        initCars: (state, action) => {
          state = [];
          action.payload.map((car) =>{
            state.push({
              productName : car.productName,
              value : 0
            });
          })
           return state;
        }
    }
  })
//   export const selectTasks=state=>state.cars;
export const selectTasks = state=>state.cars;
  export const {addCars, initCars} = addCarsSlice.actions;
  export default addCarsSlice.reducer;