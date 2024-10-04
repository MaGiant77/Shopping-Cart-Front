import { configureStore } from "@reduxjs/toolkit";
import addCarsReducer from "../features/addcars"
import userReducer from "../features/users"
import postsReducer from "../features/posts";

export const store=configureStore({
    reducer: {
        cars: addCarsReducer,
        user : userReducer,
        posts : postsReducer
    }
})