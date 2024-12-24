import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

interface ProfileProps {
    id:string;
    name:string;
    age:number;
    location:string;
    education:string;
    occupation:string;
}

const DisplayProfile = () => {
    const [profile, setProfile]=useState<ProfileProps | null>(null);
    const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-color1">
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        {/* Profile Container */}
        <div className="flex flex-col items-center">
          {/* Avatar */}
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
      
          <div className="mt-6 text-center">
            <div className="text-2xl font-bold text-gray-800">{profile.name}</div>
            <div className="text-lg text-gray-600">{profile.occupation}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayProfile

