import { createSlice, payload } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { initCars } from "./addcars";
// import { useDispatch } from "react-redux";

const initialState = {
    posts : [],
    status : 'idle',
    error : null
}

// const dispatch = useDispatch();
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () =>{
        try {
            const response = await fetch("http://localhost:5000/productList",{
                method:"get",
            });
            if(response.ok){
                console.log("response ok");
                // console.log("responsed",response.json());
                return response.json();
                // dispatch(initCars(data));
                // return data;

            } else{
                console.error("Error", response.statusText);
            }   
        }
        catch(err){
                console.log("catched error", err);
        }
    },
    {
        condition(arg, thunkApi){
            const postsStatus = selectPostsStatus(thunkApi.getState())
            if(postsStatus !== 'idle'){
                return false;
            }
        },
    },
)

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
    },
    extraReducers : (builder) =>{
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                console.log("pending")
                state.status = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log("succeed");
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                console.log("rejected");
                state.status = 'rejected';
                state.error = action.error.message ?? 'Unknown Error';
            })
    }
})

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;