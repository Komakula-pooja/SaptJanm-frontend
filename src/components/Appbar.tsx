//import { useNavigate } from 'react-router-dom';
import { GiLovers } from "react-icons/gi";

export const Appbar = () => {

    return (
        <div className="sticky top-0 border-b flex items-center justify-between px-4 py-4 sm:px-6 lg:px-16 z-50 shadow-md bg-white">

            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center text-red-600">
                SaptJanm
                <span className="px-2 md:px-3 text-2xl sm:text-3xl lg:text-5xl">
                    <GiLovers />
                </span>
            </h1>

        </div>
    );
};
