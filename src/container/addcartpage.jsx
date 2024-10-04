import Task from "../component/lilist"
import NavBar from "../component/navbar"
import { useSelector, useDispatch } from 'react-redux';
import { addCars } from "../features/addcars";
import { selectTasks } from "../features/addcars";
import { getUser } from "../features/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchPosts, selectAllPosts, selectPostsError, selectPostsStatus } from "../features/posts";
import { Spinner } from "../component/Spinner";
import { initCars } from "../features/addcars";

const AddCartPage = ({setCarInitialized}) =>{
    console.log(setCarInitialized);
    const navigate = useNavigate();
    const user = useSelector(getUser);
    useEffect(() => {
        console.log(user);
        if (!user.hasOwnProperty('userName')) {
            console.log("User does not exist");
            navigate("/"); // Only navigate when user does not have 'name'
        } else {
            console.log("User exists");
        }
    }, [user, navigate]);
    const dispatch = useDispatch();
    const cars=useSelector(selectTasks);
    function handleAddCarVal(productName){
        console.log(productName);
        const car={productName:productName}
        dispatch(addCars(car));
    }
    let content;
    const posts = useSelector(selectAllPosts);
    let postError = useSelector(selectPostsError);
    const postsStatus = useSelector(selectPostsStatus);
    console.log("postStatus", postsStatus);
    useEffect(()=>{
        console.log("postEffect");
        if(postsStatus === 'idle'){
            console.log("fetch dispatched");
            dispatch((fetchPosts()));
        }
    }, [postsStatus])
    useEffect(()=>{
        if(postsStatus ==='succeeded' && posts?.length >0 && setCarInitialized.current===false){
            console.log("There is a post");
            dispatch(initCars(posts));
            console.log(posts);
            setCarInitialized.current =true;
            
        console.log("content",content);
        }
    }, [postsStatus, posts, dispatch, setCarInitialized]);

    if(postsStatus === 'pending') {
        content = <Spinner text="Loading.." />
    } else if(postsStatus === 'succeeded') {
        console.log("insert content");
        content = posts.map((post, id)=>{
            console.log("pN", post.productName);
            return (
            <li key={id} className="p-2 flex" >
                <Task car={post.productName} onAddCarVal={handleAddCarVal} />
            </li>
        );
    })
        
} else if(postsStatus === 'rejected'){
        content = <div>{postError}</div>
    }
    return (
        <>
        <NavBar/>
        <ul className="group flex-col px-80 py-44 bg-amber-300 h-screen">
        {content}
        </ul>
        </>
    );
}

export default AddCartPage;