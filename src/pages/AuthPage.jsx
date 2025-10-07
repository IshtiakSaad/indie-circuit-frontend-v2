import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleGoogleAuth = () => {
    // 👉 Replace this with your Google Auth logic
    console.log("Google Auth triggered");
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    // 👉 Replace this with your email/password logic
    console.log("Email Auth triggered");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="w-full max-w-md bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
        {/* Tabs */}
        <div className="flex justify-around mb-6 border-b border-gray-700">
          <button
            onClick={() => setActiveTab("login")}
            className={`pb-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "login"
                ? "text-white border-b-2 border-blue-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`pb-2 text-lg font-medium transition-all duration-300 ${
              activeTab === "signup"
                ? "text-white border-b-2 border-blue-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Google Auth */}
        <button
          onClick={handleGoogleAuth}
          className="w-full flex items-center justify-center gap-3 py-2 mb-5 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          <FcGoogle size={22} />
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        {/* Forms */}
        {activeTab === "login" ? (
          <form onSubmit={handleEmailAuth} className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 p-3 bg-gray-800 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                required
                className="w-full mt-1 p-3 bg-gray-800 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleEmailAuth} className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                required
                className="w-full mt-1 p-3 bg-gray-800 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full mt-1 p-3 bg-gray-800 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <input
                type="password"
                required
                className="w-full mt-1 p-3 bg-gray-800 rounded-xl border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">
          {activeTab === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setActiveTab("signup")}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setActiveTab("login")}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
