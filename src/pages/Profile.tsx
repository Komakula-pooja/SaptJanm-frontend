import { Appbar } from "../components/Appbar";
import Designpage from "../components/Designpage";
import Profiledetails from "../components/Profiledetails";

const Profile = () => {
  return (
    <div>
      <Appbar />
      <div className="flex flex-wrap">
        <div className="w-2/5 sm:w-2/5 md:w-2/5 lg:w-2/5 p-4">
          <Designpage />
        </div>
        <div className="w-3/5 sm:w-3/5 md:w-3/5 lg:w-3/5 p-4">
          <Profiledetails />
        </div>
      </div>
    </div>
  );
};

export default Profile;

