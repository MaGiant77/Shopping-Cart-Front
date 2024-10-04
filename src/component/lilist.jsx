// import { useState } from "react";
// import { getUser } from "../features/users";
// import { useSelector } from "react-redux";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus } from "../features/posts";
import { Spinner } from "./Spinner";
import { initCars } from "../features/addcars";
// import { initCars } from "../features/addcars";

// export default function LiList({cars, onAddCarVal}){
//     const dispatch = useDispatch();
//     const posts = useSelector(selectAllPosts);
//     // dispatch(initCars(posts));
//     console.log("posts", posts);
//     const postsStatus = useSelector(selectPostsStatus);
//     console.log("postStatus", postsStatus);
//     const postError = useSelector(selectPostsError);
//     useEffect(()=>{
//         console.log("postEffect");
//         if(postsStatus === 'idle'){
//             console.log("fetch dispatched");
//             dispatch((fetchPosts()));
//         }
//     }, [postsStatus, dispatch])
//     useEffect(()=>{
//         dispatch(initCars(posts));
//     }, [postsStatus === "succeeded"])
//     let content;
//     if(postsStatus === 'pending') {
//         content = <Spinner text="Loading.." />
//     } else if(postsStatus === 'succeeded') {
//         console.log("insert content");
//         content = posts.map((post, id)=>{
//             return (
//             <li key={id} className="p-2 flex" >
//                 <Task car={post} onAddCarVal={onAddCarVal} />
//             </li>
//         );
//         })
//     } else if(postsStatus === 'rejected'){
//         content = <div>{postError}</div>
//     }
//     return (
//     <ul className="group flex-col px-80 py-44 bg-amber-300 h-screen">
//         {content}
//     </ul>
//     );
// }

export default function Task({car, onAddCarVal}){
    return (
        <label className="flex items-center justify-between w-40">
            <span >{car}</span>
            <button className="border-2 border-stone-950 p-1 mx-2" onClick={()=>onAddCarVal(car)}>Add</button>
        </label>
    )
}