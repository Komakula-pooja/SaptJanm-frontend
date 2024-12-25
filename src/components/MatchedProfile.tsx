import { useEffect, useState } from "react";
import { useProfiles } from "../hooks"
import MatchedCard from "./MatchedCard";

interface Profile {
    id: number;
    name: string;
    age: number;
    gender: string;
    religion: string;
    location: string;
    maritalStatus: string;
    familyStatus: string;
    familyType: string;
    education: string;
    employedIn: string;
    occupation: string;
}

const MatchedProfile = () => {
    const { profiles }: { profiles: Profile[] } = useProfiles();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginatedProfiles, setPaginatedProfiles] = useState<Profile[]>([]); 
    const profilesPerPage = 10;

    useEffect(() => {
        const startIndex = (currentPage - 1) * profilesPerPage;
        const endIndex = startIndex + profilesPerPage;
        setPaginatedProfiles(profiles.slice(0, endIndex));
    }, [currentPage, profiles]);

    const handleLoadMore = () => {
        if (currentPage * profilesPerPage < profiles.length) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProfiles.map((profile)=>(
            <MatchedCard 
            key={profile.id}
            id={profile.id}
            name={profile.name}
            age={profile.age}
            gender={profile.gender}
            religion={profile.religion}
            location={profile.location}
            maritalStatus={profile.maritalStatus}
            familyStatus={profile.familyStatus}
            familyType={profile.familyType}
            education={profile.education}
            employedIn={profile.employedIn}
            occupation={profile.occupation}
            />
        ))} 
    </div>
    {currentPage * profilesPerPage < profiles.length && (
        <div className="flex justify-center mt-4">
            <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Load More
            </button>
        </div>
    )}
</div>
  )
}

export default MatchedProfile
