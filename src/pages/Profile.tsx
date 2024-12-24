import { Appbar } from "../components/Appbar";
import Designpage from "../components/Designpage";
import Profiledetails from "../components/Profiledetails";

const Profile = () => {
  return (
    <div>
      <Appbar />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5 p-4">
          <Designpage />
        </div>
        <div className="w-full lg:w-3/5 p-4">
          <Profiledetails />
        </div>
      </div>
    </div>
  );
};

export default Profile;


