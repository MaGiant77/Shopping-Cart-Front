import { addCars } from "../features/addcars";
import { selectTasks } from "../features/addcars";
import { useSelector, useDispatch } from 'react-redux';

const NavBar = ({onNavPageT, onNavPageF, addState})=>{
    const cars=useSelector(selectTasks);
    // console.log(cars);
    let total=0;
    total=cars.map((car)=>{
        console.log(car.value);
        return total+car.value
    }
);
    console.log(total);
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        </div>
                        <div className="block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <button 
                                className="rounded-md px-3 py-2 text-sm font-medium 
                                    text-white bg-gray-900"
                                aria-current="page" id="addBtn" onClick={onNavPageT}>Add Cars</button>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className="ml-4 flow-root lg:ml-6">
                        <a href="#" className="group -m-2 flex items-center p-2">
                            <svg onClick={onNavPageF}
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                            
                        </a>
                    </div>               
                </div>
            </div>
        </nav>
    );
}

export default NavBar;