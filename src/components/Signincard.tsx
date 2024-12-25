import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SigninInput } from "@komakula/saptjanam-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signincard = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        postInputs
      );

      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      localStorage.setItem("id", response.data.id);
      alert("Signup successful.");
      navigate("/dashboard");
    } catch (e) {
      alert("Error while signing up.");
    }
  }

  return (
    <div className="h-full flex justify-center items-center bg-gray-50 py-8 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-red-600">Sign in</h1>
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
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Signin to your account
          </button>
          <div className="text-sm mt-4 font-medium text-gray-900">
              Don't have an account ? <a href="/home" className="text-blue-600 hover:underline dark:text-blue-500">Sign up</a>
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


export default Signincard
