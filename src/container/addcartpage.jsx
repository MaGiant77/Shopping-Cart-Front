import LiList from "../component/lilist"
import NavBar from "../component/navbar"
import { useSelector, useDispatch } from 'react-redux';
import { addCars } from "../features/addcars";
import { selectTasks } from "../features/addcars";
import { getUser } from "../features/users";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddCartPage = () =>{
    const navigate = useNavigate();
    const user = useSelector(getUser);
    console.log("addpage",user);
    console.log(typeof user.name);
    // if(user.hasOwnProperty('name')){
    //     console.log("User exist.");
    // }
    // else {
    //     console.log ("User donot exist");
    //     navigate("/");
    // }

    useEffect(() => {
        console.log(user);
        if (!user.hasOwnProperty('userName')) {
            console.log("User does not exist");
            navigate("/"); // Only navigate when user does not have 'name'
        } else {
            console.log("User exists");
        }
    }, [user, navigate]);

    const dispatch=useDispatch();
    const cars=useSelector(selectTasks);
    function handleAddCarVal(carId){
        const car={id:carId}
        dispatch(addCars(car));
    }
    return (
        <>
        <NavBar/>
        <LiList cars={cars}
        onAddCarVal={handleAddCarVal}
        />
        </>
    );
}

export default AddCartPage;