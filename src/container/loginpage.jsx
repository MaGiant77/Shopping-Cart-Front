import { useNavigate } from "react-router-dom";
import { user } from "../features/users";
import { useDispatch } from "react-redux";
import { useRef } from "react";
  
const LoginPage=()=>{
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const userName = useRef("");
    const userPassword = useRef("");
    const HandleSubmit= async (e)=>{
        e.preventDefault();
        const data = {
            userName: userName.current,
            userPassword: userPassword.current
        };
        try {
            const response = await fetch("http://localhost:5000/login",{ //send signing userName and password to back-end to verify
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                const result = await response.json();
                if(result.length===0){          //if user is not registered
                    alert("Wrong Password");
                }
                else {                          //user is registered
                    const newUser = {
                        userGrade : result[0].userGrade,
                        userName : result[0].userName,
                        userPassword : result[0].userPassword
                    }
                    console.log(newUser);
                    dispatch(user(newUser));    //set usergrade, username, userpassword to userState
                    navigate('/addCart');
                }
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
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                    <input id="name" name="name" type="text"  required 
                        // value={userName.current}
                        onChange={(e)=>{
                            userName.current = e.target.value;
                        }}
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
                        // value={userPassword.current}
                        onChange={(e)=>{userPassword.current = (e.target.value)}}
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