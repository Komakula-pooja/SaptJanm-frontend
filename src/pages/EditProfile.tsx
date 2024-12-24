import { ChangeEvent, useState } from "react";
import { CreateProfile } from "@komakula/saptjanam-common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const EditProfile = () => {
  const [step, setStep] = useState(1);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<CreateProfile>({
    name: "",
    age: 0,
    religion: "",
    gender: "",
    location: "",
    maritalStatus: "",
    familyStatus: "",
    familyType: "",
    education: "",
    employedIn: "",
    occupation: "",
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleProfilePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfilePhoto(file);
    }
  };

  async function sendRequest() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You are not logged in. Please log in and try again.");
        return;
      }

      await axios.put(
        `${BACKEND_URL}/api/v1/profile`,
        postInputs,
        {
          headers: {
            Authorization: token, 
            "Content-Type": "application/json", 
          },
        }
      );

      alert("Profile details saved");
      navigate("/dashboard");
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Failed to save details.";
      alert(`Error: ${errorMessage}`);
      console.error(error);
    }
  }

  return (
    <div className="h-full flex justify-center items-center bg-gray-50 py-8 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 md:p-12 w-full max-w-md mx-4 sm:mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-red-600">Profile Details</h1>
        </div>

        {step === 1 && (
          <div>
            <div className="mb-6">
              <label htmlFor="profile-photo" className="block mb-2 text-sm font-semibold text-gray-700">
                Profile Photo
              </label>
              <input
                type="file"
                id="profile-photo"
                onChange={handleProfilePhotoChange}
                accept="image/*"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
              />
            </div>

            {profilePhoto && (
              <div className="mb-6 text-center">
                <img
                  src={URL.createObjectURL(profilePhoto)}
                  alt="Profile Preview"
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
            )}
            <LabelledInput
              label="Name"
              placeholder="John Doe"
              onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
              id="name-input"
            />
            <LabelledInput
              label="Age"
              placeholder="Enter your age"
              type="number"
              onChange={(e) => setPostInputs({ ...postInputs, age: Number(e.target.value) })}
              id="age-input"
            />
            <LabelledInput
              label="Gender"
              placeholder="Male/Female"
              onChange={(e) => setPostInputs({ ...postInputs, gender: e.target.value })}
              id="gender-input"
            />
            <LabelledInput
              label="Religion"
              placeholder="Your religion"
              onChange={(e) => setPostInputs({ ...postInputs, religion: e.target.value })}
              id="religion-input"
            />
            <LabelledInput
              label="Location"
              placeholder="Your location"
              onChange={(e) => setPostInputs({ ...postInputs, location: e.target.value })}
              id="location-input"
            />
            <button
              onClick={handleNext}
              type="button"
              className="w-full mt-6 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <LabelledInput
              label="Marital Status"
              placeholder="Single / Widowed / Divorced"
              onChange={(e) => setPostInputs({ ...postInputs, maritalStatus: e.target.value })}
              id="maritalStatus-input"
            />
            <LabelledInput
              label="Family Status"
              placeholder="Middleclass / Upper Middleclass / Rich"
              onChange={(e) => setPostInputs({ ...postInputs, familyStatus: e.target.value })}
              id="familyStatus-input"
            />
            <LabelledInput
              label="Family Type"
              placeholder="Joint / Nuclear"
              onChange={(e) => setPostInputs({ ...postInputs, familyType: e.target.value })}
              id="familyType-input"
            />
            <LabelledInput
              label="Education"
              placeholder="e.g., B.Tech, M.Sc"
              onChange={(e) => setPostInputs({ ...postInputs, education: e.target.value })}
              id="education-input"
            />
            <LabelledInput
              label="Employed In"
              placeholder="Private / Government / Self Employed"
              onChange={(e) => setPostInputs({ ...postInputs, employedIn: e.target.value })}
              id="employedIn-input"
            />
            <LabelledInput
              label="Occupation"
              placeholder="e.g., Software Developer, Doctor"
              onChange={(e) => setPostInputs({ ...postInputs, occupation: e.target.value })}
              id="occupation-input"
            />
            <div className="flex flex-col sm:flex-row justify-center mt-6">
              <button
                onClick={handlePrevious}
                type="button"
                className="w-full sm:w-auto mb-4 sm:mb-0 mx-4 sm:mx-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Previous
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  sendRequest();
                }}
                type="button"
                className="w-full sm:w-auto mx-4 sm:mx-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Submit
              </button>
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
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default EditProfile;

