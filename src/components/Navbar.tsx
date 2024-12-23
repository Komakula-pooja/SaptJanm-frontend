
import { useNavigate } from 'react-router-dom';
import { GiLovers } from "react-icons/gi";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleSignin = () => {
        navigate('/signin');
    };

    return (
        <div className="sticky top-0 border-b flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-16 py-6 z-50 shadow-md bg-white">
            <h1 className="font-bold text-2xl md:text-4xl flex items-center text-red-600">
                Saptjanm
                <span className="px-3 py-1 text-4xl md:text-5xl">
                    <GiLovers />
                </span>
            </h1>

            <div className="flex flex-wrap items-center space-x-4">
                <h1 className="text-sm font-medium md:text-base">Already have an account?</h1>
                <button 
                    type="button" 
                    onClick={handleSignin} 
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 
                    focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Signin
                </button>
            </div>
        </div>
    );
};
