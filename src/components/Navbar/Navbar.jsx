import React, { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
//   console.log("Navbar user:", user);

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
          <Link to="/dashboard" className="btn btn-ghost">
            Dashboard
          </Link>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <button onClick={logoutUser} className="btn btn-sm btn-primary">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/auth" className="btn btn-sm btn-primary">
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
