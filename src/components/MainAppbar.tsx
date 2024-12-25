import { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';

export const MainAppbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileButtonRef = useRef<HTMLButtonElement>(null);

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate('/signin'); 
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky top-0 border-b flex items-center justify-between px-4 py-4 sm:px-6 lg:px-16 z-50 shadow-md bg-white">

    <Link to="/dashboard">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center text-red-600">
        SaptJanm
        <span className="px-2 md:px-3 text-2xl sm:text-3xl lg:text-5xl">
          <GiLovers />
        </span>
      </h1>
      </Link>

      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">

        <button
          type="button"
          ref={profileButtonRef}
          className="flex items-center justify-center w-12 h-12 bg-red-200 rounded-full md:me-0 focus:ring-4 focus:ring-red-300"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <FaUser className="w-9 h-9 rounded-full"/>
        </button>


        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-10 right-0 mt-2 w-48 text-base list-none bg-red-200 divide-y divide-gray-100 rounded-lg shadow-lg z-50"
          >
            <ul className="py-2">
              <li>
                <a onClick={()=>{navigate("/settings")}} className="block px-4 py-2 text-sm text-gray hover:bg-gray-100">
                  Settings
                </a>
              </li>
              <li>
                <a href="/" className="block px-4 py-2 text-sm text-gray hover:bg-gray-100 ">
                  Help
                </a>
              </li>
              <li>
                <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray hover:bg-gray-100 " >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
