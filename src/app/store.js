import { configureStore } from "@reduxjs/toolkit";
import addCarsReducer from "../features/addcars"
import navPageReducer from "../features/navpage";

export const store=configureStore({
    reducer: {
        cars: addCarsReducer,
        navpage: navPageReducer
    }
})