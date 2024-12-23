import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom"
import { SignupInput } from "@komakula/saptjanam-common";
import axios from "axios";
import { BACKEND_URL } from "../config";


const Signup=()=>{
  const navigate = useNavigate();
  const [postInputs,setPostInputs]=useState<SignupInput>({
    email:"",
    password:""
});
  
  async function sendRequest(){
    try{
      const response= await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );

      const jwt = response.data;
      localStorage.setItem("token",jwt);
      localStorage.setItem("email",postInputs.email);
      alert("Signup successfull.")
      navigate("/profile")
    } catch(e){
      alert("Error while signingup")
    }
  }

  return(
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Create an Account</h1>
        </div>
        <div className="pt-8">
          <LabelledInput
            label="Email"
            placeholder="xyz@gmail.com"
            onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
            id="username-input"
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="At least 6 characters.."
            onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
            id="password-input"
          />
          <button
            onClick={(e) => {
                e.preventDefault();
                sendRequest();
            }}
            type="button"
            className="w-full mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
          Signup
          </button>
        </div>
      </div>
    </div>

  )
}

interface LabelledInputType{
    label: string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
    id:string;
}

function LabelledInput({label, placeholder, onChange, type, id}:LabelledInputType){
    return <div>
         <label htmlFor={id} className="block mb-2 text-sm text-black font-semibold pt-4">{label}
         </label>
         <input onChange={onChange}  type={type || "text"} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 
         text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}


export default Signup