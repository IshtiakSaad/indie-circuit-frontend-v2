import React, { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log("Navbar user:", user);

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
          <Link to="/all-mentors" className="btn btn-ghost">
            All Mentors
          </Link>
          <div className="bg-gray-500 my-auto px-3 py-1 rounded-full text-white">
            <Suspense fallback={<div>Loading...</div>}>
              {user?.displayName || user?.email}
            </Suspense>
          </div>
          {!user ? (
            <Link to="/auth" className="btn btn-primary">
              Login / Sign Up
            </Link>
          ) : (
            <Link to="/" onClick={logoutUser} className="btn btn-primary">
              Logout
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
