import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

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
    const [isEditingIcon, setIsEditingIcon] = useState(false);
    const [newIcon, setNewIcon] = useState<string>("");

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

    const handleIconChange = () => {
        // Handle the logic for updating the profile icon
        if (newIcon) {
            console.log("Updating profile icon:", newIcon);
            // Call an API to update the profile icon if necessary
        }
        setIsEditingIcon(false);
    };

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
        <div className="min-h-screen bg-color1 flex justify-center pt-10">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
                <div className="flex items-center justify-center mb-6">
                    <div className="relative w-36 h-36 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center">
                        {isEditingIcon ? (
                            <div>
                                <input
                                    type="text"
                                    value={newIcon}
                                    onChange={(e) => setNewIcon(e.target.value)}
                                    placeholder="Enter new icon URL"
                                    className="p-2 border rounded-md"
                                />
                                <button
                                    onClick={handleIconChange}
                                    className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md"
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
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
                        )}
                    </div>
                    {!isEditingIcon && (
                        <button
                            onClick={() => setIsEditingIcon(true)}
                            className="absolute bottom-0 right-0 text-blue-500"
                        >
                            Edit
                        </button>
                    )}
                </div>

                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{profile.name}</div>
                    <p className="mt-4 text-gray-600">
                        I am a {profile.age} years old {profile.occupation}. After completing my {profile.education} degree, I come from a {profile.familyStatus}, {profile.familyType} family and currently live in {profile.location}.
                    </p>
                    <button
                        onClick={() => console.log("Edit Profile")}
                        className="mt-4 text-blue-500"
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DisplayProfile;
