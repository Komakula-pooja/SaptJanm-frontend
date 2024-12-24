import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
    id: string;
    name: string;
    age: number;
    location: string;
    education: string;
    occupation: string;
    familyStatus: string;
    familyType: string;
}

const DisplayProfile = () => {
    const [profile, setProfile] = useState<ProfileProps | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

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
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.log("Error fetching profile:", e);
            }
        }

        fetchData();
    }, []);

    const handleEdit=()=>{
        navigate("/EditProfile")
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-color1 flex items-center justify-center text-green-900">
                <p className="text-xl font-semibold">Loading profile...</p>
            </div>
        );
    }

    if (!profile) {
        return <p>No profile data found.</p>;
    }

    return (
        <div className="min-h-screen bg-color1 flex justify-center items-start pt-6">
            <div className="w-full max-w-md mx-auto flex flex-col items-center text-center">
                <div className="relative w-36 h-36 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                        className="w-24 h-24 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>

                <div className="mt-4">
                    <div className="text-2xl font-bold text-gray-800">{profile.name}</div>
                    <p className="mt-4 text-gray-600">
                        I am {profile.age} years old and a {profile.occupation} after completing my {profile.education} degree, I come from a {profile.familyStatus}, {profile.familyType} family and currently lives in {profile.location}.
                    </p>
                </div>

                <button
                    onClick={handleEdit}
                    className="mt-4 text-blue-500 flex items-center"
                >
                    Edit Profile <CiEdit className="w-6 h-6 ml-2 text-blue-500" />
                </button>
                <div className="mt-6 w-full border-t border-gray-300"></div>
            </div>
        </div>
    );
}

export default DisplayProfile;
