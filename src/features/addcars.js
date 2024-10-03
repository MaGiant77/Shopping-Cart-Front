import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, text: 'Toyota', value: 0},
    {id: 1, text: 'Honda', value: 0},
    {id: 2, text: 'Ford', value: 0},
    {id: 3, text: 'Chevrolet', value: 0}
  ];
// let nextId=4;
  export const addCarsSlice=createSlice({
    name: "cars",
    initialState,
    reducers: {
        addCars: (state, action)=>{
            const index = state.findIndex(t => t.id === action.payload.id);
            if (index !== -1) {
                state[index] = {...state[index], value : state[index].value+1}
            }
        }
    }
  })
//   export const selectTasks=state=>state.cars;
export const selectTasks = state=>state.cars;
console.log(selectTasks);
  export const {addCars} = addCarsSlice.actions;
  export default addCarsSlice.reducer;