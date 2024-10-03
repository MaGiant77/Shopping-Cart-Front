import LiList from "../component/lilist"
import NavBar from "../component/navbar"
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { addCars } from "../features/addcars";
import { selectTasks } from "../features/addcars";
import { navPage } from "../features/navpage";
import { selectPage } from "../features/navpage";
import ShowCars from "../component/showcars";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MainPage = () =>{
    const dispatch=useDispatch();
    const cars=useSelector(selectTasks);
    const pageFlag=useSelector(selectPage);
    const navigate=useNavigate();
    // console.log(cars);
    function handleAddCarVal(carId){
        const car={id:carId}
        dispatch(addCars(car));
    }
    function handleNavPageT(){
        console.log("t");
        dispatch(navPage("true"));
    }
    function handleNavPageF(){
        console.log("F");
        dispatch(navPage("false"));
    }
    useEffect(()=>{
        navigate(pageFlag? '/add/addCars':'/add/showCars');

    }, [pageFlag, navigate]);
    return (
        <>
        <NavBar onNavPageT={handleNavPageT} onNavPageF={handleNavPageF} addState={pageFlag}/>
            <Routes>
                <Route path='addCars' element={
                    <LiList cars={cars}
                    onAddCarVal={handleAddCarVal}
                    />} 
                />
                <Route path='showCars' element={
                    <ShowCars cars={cars}
                    />} 
                />
            </Routes>
        </>
    );
}

export default MainPage;