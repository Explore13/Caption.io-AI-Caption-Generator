import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md w-full fixed top-0 left-0 z-10">
      <div className="w-full px-20 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Caption.io
          </h1>
        </Link>
        <div className="space-x-4 text-black/80 hidden md:flex">
          <Link to="/terms-conditions" className="hover:text-blue-400">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </Link>
          <Link to="/contact-us" className="hover:text-blue-400">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
