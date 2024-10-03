import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './container/loginpage';
import AddCartPage from './container/addcartpage';
import ShowCartPage from './container/showcartpage';


export default function MyApp(){

   return (
    <BrowserRouter>
         <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/addCart' element={<AddCartPage />} />
          <Route path='/showCart' element={<ShowCartPage />} />
         </Routes>
    </BrowserRouter>
      
   );
}
