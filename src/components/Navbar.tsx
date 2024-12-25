import { useNavigate } from 'react-router-dom';
import { GiLovers } from "react-icons/gi";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/signin');
    };

    return (
        <div className="sticky top-0 border-b flex items-center justify-between px-4 py-4 sm:px-6 lg:px-16 z-50 shadow-md bg-white">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center text-red-600">
                SaptJanm
                <span className="px-2 md:px-3 text-2xl sm:text-3xl lg:text-5xl">
                    <GiLovers />
                </span>
            </h1>

            <div className="flex items-center space-x-2 sm:space-x-4">
                <h1 className="text-xs sm:text-sm md:text-base font-medium underline text-gray-600 hidden sm:block">
                    Already have an account?
                </h1>
                <button 
                    type="button" 
                    onClick={handleSignin} 
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs sm:text-sm md:text-base px-3 py-2 sm:px-5 sm:py-2.5 hidden sm:block"
                >
                    Signin
                </button>
            </div>
        </div>
    );
};
