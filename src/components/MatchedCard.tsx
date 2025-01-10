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
        <div className="p-6 bg-red-100 border border-red-200 rounded-lg shadow-lg my-6 mx-6 sm:mx-8 lg:mx-16 flex flex-col items-center text-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 overflow-hidden bg-red-300 rounded-full flex items-center justify-center">
                <svg
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-red-600"
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
    
            <div className="mt-4 font-semibold text-gray-800 text-lg sm:text-xl lg:text-2xl">
                {name}
            </div>
    
            <div className="text-sm text-gray-600 sm:text-base lg:text-lg">
                {age} years old, {occupation}
            </div>
    
            <div className="mt-4">
                <Link
                    to={`/${id}`}
                    className="text-blue-500 hover:underline text-sm sm:text-base lg:text-lg"
                >
                    View More
                </Link>
            </div>
        </div>
    );
    
}; 

export default MatchedCard
