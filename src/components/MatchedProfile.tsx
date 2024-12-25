import { useProfiles } from "../hooks"
import MatchedCard from "./MatchedCard";


const MatchedProfile = () => {
    const { profiles }=useProfiles();


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile)=>(
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
  )
}

export default MatchedProfile
