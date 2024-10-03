// import { useState } from "react";
// import { getUser } from "../features/users";
// import { useSelector } from "react-redux";
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus } from "../features/posts";
import { Spinner } from "./Spinner";

export default function LiList({cars, onAddCarVal}){
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    console.log("posts", posts);
    const postsStatus = useSelector(selectPostsStatus);
    console.log("postStatus", postsStatus);
    const postError = useSelector(selectPostsError);
    useEffect(()=>{
        console.log("postEffect");
        if(postsStatus === 'idle'){
            console.log("fetch dispatched");
            dispatch((fetchPosts()));
        }
    }, [postsStatus, dispatch])
    let content;
    if(postsStatus === 'pending') {
        content = <Spinner text="Loading.." />
    } else if(postsStatus === 'succeeded') {
        console.log("insert content");
        content = posts.map((post)=><Task car={post.car} onAddCarVal={onAddCarVal} />)
    } else if(postsStatus === 'rejected'){
        content = <div>{postError}</div>
    }
    return (
    <ul className="group flex-col px-80 py-44 bg-amber-300 h-screen">
        {cars.map((car)=>(
            <li key={car.id} className="p-2 flex" >
                {/* <Task car={car} onAddCarVal={onAddCarVal} /> */}
                {content}
            </li>
        ))}
    </ul>
    );
}

function Task({car, onAddCarVal}){
    return (
        <label className="flex items-center justify-between w-40">
            <span >{car.text}</span>
            <button className="border-2 border-stone-950 p-1 mx-2" onClick={()=>onAddCarVal(car.id)}>Add</button>
        </label>
    )
}