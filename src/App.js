import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './container/loginpage';
import AddCartPage from './container/addcartpage';
import ShowCartPage from './container/showcartpage';
import AddCarList from './container/addCarList';
import { useRef } from 'react';

export default function MyApp(){
   const setCarInitialized = useRef(false);
   console.log("ref in APp", setCarInitialized);
   return (
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/addCart' element={<AddCartPage setCarInitialized={setCarInitialized} />} />
          <Route path='/showCart' element={<ShowCartPage />} />
          <Route path='/addCarList' element={<AddCarList setCarInitialized={setCarInitialized} />} />
         </Routes>
    </BrowserRouter>
   );
}
