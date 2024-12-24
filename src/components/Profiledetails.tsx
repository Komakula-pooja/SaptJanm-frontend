import  { ChangeEvent,useState } from 'react';
import { CreateProfile } from '@komakula/saptjanam-common';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


const Profiledetails = () => {
    const [step, setStep]=useState(1);
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<CreateProfile>({
      name: "",
      age: "",
      religion:"",
      gender:"",
      location:"",
      maritalStatus:"",
      familyStatus:"",
      familyType:"",
      education:"",
      employedIn:"",
      occupation:"",
      id:""
    });

    const handleNext=()=>{
        setStep(step+1);
    }
    const handlePrevious=()=>{
        setStep(step-1);
    }


    async function sendRequest() {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/v1/profile`,
          postInputs
        );
  
        const jwt = response.data;
        localStorage.setItem("token", jwt);
       
        alert("Profile detials saved");
        navigate("/dashboard");
      } catch (e) {
        alert("Error while loading details.");
      }
    }
  
    return (
      <div className="h-full flex justify-center items-center bg-gray-50 py-8 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-md mx-4 sm:mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold text-red-600">Profile details</h1>
          </div>
          {step === 1 && (
            <div className='step'> 
            <div>
                <LabelledInput
                label="Name"
                placeholder="John dev"
                onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
                id="name-input"
                />
                <LabelledInput
                label="Age"
                type="age"
                placeholder="enter age"
                onChange={(e) => setPostInputs({ ...postInputs, age: e.target.value })}
                id="age-input"
                />
                <LabelledInput
                label="Gender"
                type="gender"
                placeholder="Male/Female"
                onChange={(e) => setPostInputs({ ...postInputs, gender: e.target.value })}
                id="gender-input"
                />
                <LabelledInput
                label="Religion"
                type="religion"
                placeholder=""
                onChange={(e) => setPostInputs({ ...postInputs, religion: e.target.value })}
                id="religion-input"
                />
                <LabelledInput
                label="Loctaion"
                type="location"
                placeholder=""
                onChange={(e) => setPostInputs({ ...postInputs, location: e.target.value })}
                id="location-input"
                />
                <button onClick={handleNext} type="button"
                className="w-full mt-6 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4
                    focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    Next
                </button>
                </div>
            </div>
          )}

          {step === 2 && (
            <div className='step'>
            <div>
            <LabelledInput
              label="MaritalStatus"
              type="maritalStatus"
              placeholder="Single / Widowed / Divorced"
              onChange={(e) => setPostInputs({ ...postInputs, maritalStatus: e.target.value })}
              id="maritalStatus-input"
            />
            <LabelledInput
              label="FamilyStatus"
              type="familyStatus"
              placeholder="Middleclass / Upper Middleclass / High class / Rich"
              onChange={(e) => setPostInputs({ ...postInputs, familyStatus: e.target.value })}
              id="familystatus-input"
            />
            <LabelledInput
              label="FamilyType"
              type="familyType"
              placeholder="joint / Nuclear "
              onChange={(e) => setPostInputs({ ...postInputs, age: e.target.value })}
              id="age-input"
            />
            <LabelledInput
              label="Education"
              type="education"
              placeholder="B.tech / M.tech / B.Sc"
              onChange={(e) => setPostInputs({ ...postInputs, education: e.target.value })}
              id="education-input"
            />
            <LabelledInput
              label="EmployedIn"
              type="employedIn"
              placeholder="Private Sector/ Government / Business / Self Employed"
              onChange={(e) => setPostInputs({ ...postInputs, employedIn: e.target.value })}
              id="employedIn-input"
            />
            <LabelledInput
              label="Occupation"
              type="occupation"
              placeholder="Software / Hardware / Doctor"
              onChange={(e) => setPostInputs({ ...postInputs, occupation: e.target.value })}
              id="occupation-input"
            />
            <div className='flex '>
            <button onClick={handlePrevious} type="button"
                className="w-full mt-6 mx-4 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4
                    focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
                    previous
                </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                sendRequest();
              }}
              type="button"
              className="w-full mt-6 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4
                  focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Submit
            </button>
            </div>
            <div className="text-sm mt-4 font-medium text-gray-900">
                Don't have an account ? <a href="/home" className="text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
            </div>
            </div>
        </div>
        )}
      </div>
    </div>
    );
  };
  
  interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    id: string;
  }
  
  function LabelledInput({ label, placeholder, onChange, type, id }: LabelledInputType) {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-700">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }

export default Profiledetails;
