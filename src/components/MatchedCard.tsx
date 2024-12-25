import { Link } from "react-router-dom";


interface MatchedCardProps{
    id:number;
    name:string;
    age:number; gender:string;
    religion:string;
    location:string;
    maritalStatus:string;
    familyStatus:string;
    familyType:string;
    education:string;
    employedIn:string;
    occupation:string;
}

const MatchedCard = ({
    id,
    name,
    age,
    occupation
}:MatchedCardProps) => {
  return (
    <div className="p-4 bg-red-100 border border-red-200 rounded-lg shadow-md my-2 flex flex-col items-center text-center sm:p-6 lg:p-8">
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden bg-red-300 rounded-full flex items-center justify-center">
        <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-red-600"
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

    <div className="mt-2 font-semibold text-gray-800 text-lg sm:text-xl">{name}</div>

    <div className="text-sm text-gray-600 sm:text-base">
        {age} years old, {occupation}
    </div>

    <div className="mt-2">
        <Link
            to={`/${id}`}
            className="text-blue-500 hover:underline"
        >
            View More
        </Link>
    </div>
</div>
);
};
export default MatchedCard
