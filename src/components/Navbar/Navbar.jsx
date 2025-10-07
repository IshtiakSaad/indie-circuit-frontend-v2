import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-base-200 shadow-md">
        <div className="flex-1 px-4 text-xl font-bold">Indie Circuit</div>
        <div className="flex gap-4 px-4">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About
          </Link>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
