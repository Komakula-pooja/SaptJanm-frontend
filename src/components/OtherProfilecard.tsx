import { MainAppbar } from "./MainAppbar"
import { Profile } from "../hooks"
import { HeartHandshake } from 'lucide-react';

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

          <div className="hidden md:block md:col-span-4 lg:col-span-4 bg-red-200 p-6 rounded-lg shadow-md">
            <HeartHandshake className="text-white w-10 h-10"/>
            <div className="text-xl font-semibold text-whte">"Together, We Grow"</div>
            <div className="pt-4 white">"A perfect life partner is not someone you just live with, but someone you build a future with.
                 We connect you with individuals who are ready to grow together, support each other, and create lasting memories."</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfilecard