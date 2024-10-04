import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts : [],
    status : 'idle',
    error : null
}
export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () =>{
        try {
            const response = await fetch("http://localhost:5000/productList",{  //get the whole lists of car from db
                method:"get",
            });
            if(response.ok){
                return response.json();
            } else{
                console.error("Error", response.statusText);
            }   
        }
        catch(err){
                console.log("catched error", err);
        }
    }
)

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
    },
    extraReducers : (builder) =>{
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message ?? 'Unknown Error';
            })
    }
})

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;