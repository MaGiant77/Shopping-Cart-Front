import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './container/loginpage';
import MainPage from './container/mainpage';
import {addCars} from './features/addcars';
import { selectTasks } from './features/addcars';





export default function MyApp(){
  const dispatch=useDispatch();
  const tasks=useSelector(selectTasks);
  
   return (
    <Router>
         <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/add/*' element={<MainPage />} />
         </Routes>
    </Router>
      
   );
}
