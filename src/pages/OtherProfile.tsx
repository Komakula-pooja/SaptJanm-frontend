import { useParams } from "react-router-dom";
import { useProfile } from "../hooks";
import OtherProfilecard from "../components/OtherProfilecard";
import { MainAppbar } from "../components/MainAppbar";

const OtherProfile = () => {
    const {id}=useParams();
    const {loading,profile} =useProfile({
        id:id || ""
    });

    if(loading || !profile){
        return <div> 
            <MainAppbar />           
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    Loading...
                </div>
            </div>
        </div>
    }

  return (
    <div>
      <OtherProfilecard 
            profile={profile}
            id={Number(id)}
      />
    </div>
  )
}

export default OtherProfile
