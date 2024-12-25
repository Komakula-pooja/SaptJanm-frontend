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
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md my-2">
        <Avatar name={name} />
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

 export function Avatar({ name, size = "big" }: { name: string; size?: "small" | "big" }) {
    return (
      <div
        className={`relative inline-flex items-center justify-center
        overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
          size === "small" ? "w-6 h-6" : "w-20 h-20"
        }`}
      >
        <span
          className={`${
            size === "small" ? "text-xs" : "text-md"
          } font-extralight text-gray-600 dark:text-gray-300`}
        >
          {name[0].toUpperCase()}
        </span>
      </div>
    );
}

export default MatchedCard
