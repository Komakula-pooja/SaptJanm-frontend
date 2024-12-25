import { GiCrownedHeart } from "react-icons/gi";

const Designpage = () => {
      return (
        <div className="flex flex-col justify-center items-center text-center h-full bg-gradient-to-r from-red-500 to-pink-500 p-6">
          <div className="mb-4">
            <GiCrownedHeart className="text-white md:text-9xl sm:text-6xl" />
          </div>
          <div>
            <h1 className="text-white text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-2">
              "Your Perfect Match Begins Here!"
            </h1>
            <h2 className="text-white text-lg sm:text-xl md:text-xl font-medium">
              "Complete your profile to help us find someone who truly complements you."
            </h2>
          </div>
        </div>
      );
    };
    

export default Designpage
