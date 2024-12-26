import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupInput } from "@komakula/saptjanam-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  async function sendRequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInputs
      );
  
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("id", response.data.id);
      alert("Signup successful.");
      navigate("/profile");
    } catch (e) {
      alert("Error while signing up.");
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="h-full flex justify-center items-center bg-gray-100 py-8 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-600">Create an Account</h1>
        </div>
        <div>
          <LabelledInput
            label="Email"
            placeholder="xyz@gmail.com"
            onChange={(e) => setPostInputs({ ...postInputs, email: e.target.value })}
            id="email-input"
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
            className="w-full mt-6 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" disabled={loading}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg className="w-5 h-5 mr-2 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="text-white" ></circle>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2z" className="text-red-300"></path>
                </svg>
                Signing up...
              </span>
            ) : (
              "Signup"
            )}
          </button>
          <div className="text-sm mt-4 font-medium text-gray-900">
              Already have an account ? <a href="/signin" className="text-blue-600 hover:underline dark:text-blue-500">Sign in</a>
          </div>
        </div>
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

export default Signup;
