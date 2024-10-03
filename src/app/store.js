import { configureStore } from "@reduxjs/toolkit";
import addCarsReducer from "../features/addcars"
import navPageReducer from "../features/navpage";
import userReducer from "../features/users"
import postsReducer from "../features/posts";

export const store=configureStore({
    reducer: {
        cars: addCarsReducer,
        navpage: navPageReducer,
        user : userReducer,
        posts : postsReducer
    }
})