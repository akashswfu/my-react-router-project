import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Knowledge Store
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "default"
              }
            >
              About us
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Cart
              </NavLink>
            </li>
          )}
          <li>
            {user ? (
              <NavLink
                onClick={handleLogOut}
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "default"
                }
              >
                Login
              </NavLink>
            )}
          </li>
          <li>
            {user && (
              <li className="text-green-500 font-semibold">{user.email}</li>
            )}
          </li>
          <li>
            {user && (
              <div className="w-10 h-10 rounded-full bg-blue-500 relative">
                {user.photoURL ? (
                  <div>
                    <img
                      className="w-full h-full rounded-full absolute inset-0 bg-cover bg-center z-0"
                      src={user.photoURL}
                      alt={user?.email?.slice(0, 1)}
                    />
                    <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-sm text-red-500 font-semibold">
                      {user.displayName}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center ">
                    <p className="uppercase text-xl font-bold text-red-700 ">
                      {user.email.slice(0, 1)}
                    </p>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Knowledge Store
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        About Us
                      </Link>
                    </li>
                    {user && (
                      <li>
                        <Link
                          to="/cart"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Cart
                        </Link>
                      </li>
                    )}
                    <li>
                      {user ? (
                        <Link
                          onClick={handleLogOut}
                          to="/login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Logout
                        </Link>
                      ) : (
                        <Link
                          to="/login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
