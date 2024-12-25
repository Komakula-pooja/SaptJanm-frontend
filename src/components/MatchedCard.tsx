import { Link } from "react-router-dom";


interface MatchedCardProps{
    id:number;
    name:string;
    age:number;
    gender:string;
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
    <div>
        <Avatar name={name} />
        <div>
            {name}
        </div>
        <div>
            {age},{occupation}
        </div>
        <div>
            <Link to={`/${id}`} >View More</Link>
        </div>
    </div>
  )
}

 function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
    return (
      <div
        className={`relative inline-flex items-center justify-center
        overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
          size === "small" ? "w-6 h-6" : "w-10 h-10"
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
