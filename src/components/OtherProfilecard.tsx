import { MainAppbar } from "./MainAppbar"
import { Profile } from "../hooks"

interface OtherProfileProps{
    profile:Profile;
    id:number;
}

const OtherProfilecard = ({
    profile,
}:OtherProfileProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
        <MainAppbar />
        <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 sm:px-10 w-full max-w-screen-xl py-8">

          <div className="col-span-12 md:col-span-8 lg:col-span-8 bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold text-gray-800">NAME: {profile.name}</div>
            <div className="pt-4 text-gray-700">AGE: {profile.age}</div>
            <div className="pt-4 text-gray-700">GENDER: {profile.gender}</div>
            <div className="pt-4 text-gray-700">RELIGION: {profile.religion}</div>
            <div className="pt-4 text-gray-700">LOCATION: {profile.location}</div>
            <div className="pt-4 text-gray-700">MARITAL STATUS: {profile.maritalStatus}</div>
            <div className="pt-4 text-gray-700">FAMILY STATUS: {profile.familyStatus}</div>
            <div className="pt-4 text-gray-700">FAMILY TYPE: {profile.familyType}</div>
            <div className="pt-4 text-gray-700">EDUCATION: {profile.education}</div>
            <div className="pt-4 text-gray-700">EMPLOYED IN: {profile.employedIn}</div>
            <div className="pt-4 text-gray-700">OCCUPATION: {profile.occupation}</div>
          </div>

          <div className="hidden md:block md:col-span-4 lg:col-span-4 bg-blue-100 p-6 rounded-lg shadow-md">
            <div className="text-xl font-semibold text-blue-800">Partner Match Info</div>
            <div className="pt-4 text-blue-700">
              <div>✔ Looking for a similar age range</div>
              <div>✔ Compatible family type</div>
              <div>✔ Shared cultural interests</div>
            </div>
            <div className="flex justify-center mt-6">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.95 7.05a1.5 1.5 0 11-2.12 2.12L12 10.12l-1.83 1.83a1.5 1.5 0 01-2.12-2.12L9.88 8 8.05 6.17a1.5 1.5 0 112.12-2.12L12 5.88l1.83-1.83a1.5 1.5 0 112.12 2.12L14.12 8l1.83 1.83z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfilecard
