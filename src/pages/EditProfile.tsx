import { ChangeEvent, useEffect, useState } from "react";
import { CreateProfile } from "@komakula/saptjanam-common";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ProfileProps {
  id:number;
  name: string;
  age: number;
  gender: string;
  religion: string;
  location: string;
  education: string;
  occupation: string;
  familyStatus: string;
  familyType: string;
  maritalStatus: string;
  employedIn: string;
}

const EditProfile = () => {
  const [step, setStep] = useState(1);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileProps | null>(null);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-color1 flex items-center justify-center text-green-900">
        <p className="text-xl font-semibold">Loading profile...</p>
      </div>
    );
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get(`${BACKEND_URL}/api/v1/profile`, {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        });
        setProfile(res.data.profile);
        setPostInputs((prevInputs) => ({
          ...prevInputs,
          ...res.data.profile,
        }));
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log("Error fetching profile:", e);
      }
    }

    fetchData();
  }, []);


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
      const id = localStorage.getItem("profileId");
      console.log(id)

      if (!token) {
        alert("You are not logged in. Please log in and try again.");
        return;
      }

      if (!id) {
        throw new Error("Profile ID is missing.");
      }
    
      const requestBody = {
        ...postInputs,
        id: parseInt(id, 10), 
      };
      console.log(requestBody)

      await axios.put(
        `${BACKEND_URL}/api/v1/profile`,
        requestBody,
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

        {step === 1 && profile && (
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
              placeholder={profile.name}
              value={postInputs.name || profile.name}
              onChange={(e) => setPostInputs({ ...postInputs, name: e.target.value })}
              id="name-input"
            />
            <LabelledInput
              label="Age"
              placeholder="Enter your age"
              value={postInputs.age || profile.age}
              type="number"
              onChange={(e) => setPostInputs({ ...postInputs, age: Number(e.target.value) })}
              id="age-input"
            />
            <LabelledInput
              label="Gender"
              placeholder="Male/Female"
              value={postInputs.gender || profile.gender}
              onChange={(e) => setPostInputs({ ...postInputs, gender: e.target.value })}
              id="gender-input"
            />
            <LabelledInput
              label="Religion"
              placeholder="Your religion"
              value={postInputs.religion || profile.religion}
              onChange={(e) => setPostInputs({ ...postInputs, religion: e.target.value })}
              id="religion-input"
            />
            <LabelledInput
              label="Location"
              placeholder="Your location"
              value={postInputs.location || profile.location}
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

        {step === 2 && profile && (
          <div>
            <LabelledInput
              label="Marital Status"
              placeholder="Single / Widowed / Divorced"
              value={postInputs.maritalStatus || profile.maritalStatus}
              onChange={(e) => setPostInputs({ ...postInputs, maritalStatus: e.target.value })}
              id="maritalStatus-input"
            />
            <LabelledInput
              label="Family Status"
              placeholder="Middleclass / Upper Middleclass / Rich"
              value={postInputs.familyStatus || profile.familyStatus}
              onChange={(e) => setPostInputs({ ...postInputs, familyStatus: e.target.value })}
              id="familyStatus-input"
            />
            <LabelledInput
              label="Family Type"
              placeholder="Joint / Nuclear"
              value={postInputs.familyType || profile.familyType}
              onChange={(e) => setPostInputs({ ...postInputs, familyType: e.target.value })}
              id="familyType-input"
            />
            <LabelledInput
              label="Education"
              placeholder="e.g., B.Tech, M.Sc"
              value={postInputs.education || profile.education}
              onChange={(e) => setPostInputs({ ...postInputs, education: e.target.value })}
              id="education-input"
            />
            <LabelledInput
              label="Employed In"
              placeholder="Private / Government / Self Employed"
              value={postInputs.employedIn || profile.employedIn}
              onChange={(e) => setPostInputs({ ...postInputs, employedIn: e.target.value })}
              id="employedIn-input"
            />
            <LabelledInput
              label="Occupation"
              placeholder="e.g., Software Developer, Doctor"
              value={postInputs.occupation || profile.occupation}
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
  value: string | number | undefined;
  id: string;
}

function LabelledInput({ label, placeholder, onChange, type, value, id }: LabelledInputType) {
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
        value={value}
        required
      />
    </div>
  );
}

export default EditProfile;
