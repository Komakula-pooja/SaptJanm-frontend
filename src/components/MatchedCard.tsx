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
    <div className="p-6 bg-red-200 border border-red-300 rounded-lg shadow-md my-2 flex flex-col items-center text-center">
        <div className="relative w-24 h-24 overflow-hidden bg-red-200 rounded-full flex items-center justify-center">
            <svg
                className="w-24 h-24 text-black"
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
        <div className="mt-2 font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-600">
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
  )
}

export default MatchedCard
