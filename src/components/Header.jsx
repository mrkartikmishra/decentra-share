import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full h-14 px-5 text-white bg-secondary flex items-center justify-between">
      <Link to="/">
        <h2 className="font-bold italic text-xl">DecentraShare</h2>
      </Link>
      <button className="bg-gradient-to-r from-orangelight to-orangedark px-2 py-1 rounded-md hover:bg-orangedark">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Header;
