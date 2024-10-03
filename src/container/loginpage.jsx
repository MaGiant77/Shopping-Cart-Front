import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

  
const LoginPage=()=>{
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        console.log("here");
        console.log('here');
        // useEffect(()=>{
        const data = {
            userName,
            userPassword
        };
        console.log(data);
        try {
            const response = await fetch("http://localhost:5000/login",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                const result = await response.json();
                if(result.length===0){
                    alert("Wrong Password");
                }
                else {
                    navigate('/add');
                }
                // console.log("Suceesed", result.length===0? "No" : "Ok");
            } else{
                console.error("Error", response.statusText);
            }        
        } catch (error) {
            console.error("CError", error);
        }

        // }, []);
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                    <input id="name" name="name" type="text"  required 
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                        className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" name="password" type="password" required 
                        value={userPassword}
                        onChange={(e)=>setUserPassword(e.target.value)}
                        className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <button type="submit" 
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 
                    text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-indigo-600" onClick={HandleSubmit}>Sign in</button>
                </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;