import NavBar from "../component/navbar"
import { selectTasks } from "../features/addcars";
import { useSelector } from "react-redux";
import ShowCars from "../component/showcars";
import { getUser } from "../features/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShowCartPage = () =>{
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
    const cars=useSelector(selectTasks);
    return (
        <>
        <NavBar/>
        <ShowCars cars={cars}
        />
        </>
    );
}
export default ShowCartPage;