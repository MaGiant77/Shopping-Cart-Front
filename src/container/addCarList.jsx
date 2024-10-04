import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../features/users";
  
const AddCarList=({setCarInitialized})=>{
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
    const productName = useRef("");
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const data = {
            productName: productName.current,
        };
        console.log(data);
        try {
            const response = await fetch("http://localhost:5000/createCar",{ //send signing userName and password to back-end to verify
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                alert("Succeed!");
                navigate("/addCart");
                setCarInitialized.current = false;

            } else{
                console.error("Error", response.statusText);
            }        
        } catch (error) {
            console.error("CError", error);
        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please Create New Car</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">CarName</label>
                    <div className="mt-2">
                    <input id="carName" name="carName" type="text"  required 
                        // value={userName.current}
                        onChange={(e)=>{
                            productName.current = e.target.value;
                        }}
                        className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div>
                    <button type="submit" 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 
                    text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600" onClick={HandleSubmit}>Register</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default AddCarList;