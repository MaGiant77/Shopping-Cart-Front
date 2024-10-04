import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  ];
  export const addCarsSlice=createSlice({
    name: "cars",
    initialState,
    reducers: {
        addCars: (state, action)=>{     //increase the cart
            const index = state.findIndex(t => t.productName === action.payload.productName);
            if (index !== -1) {
                state[index] = {...state[index], value : state[index].value+1}
            }
        },
        initCars: (state, action) => {  //init list of cars from db
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