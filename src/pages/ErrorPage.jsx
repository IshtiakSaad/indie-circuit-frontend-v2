import React from "react";

const ErrorPage = ({ code = 404, message = "Something went wrong" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-850 p-16 rounded-3xl shadow-[8px_8px_20px_#0a0a0a,-8px_-8px_20px_#121212] text-center max-w-sm w-full">
        <h1 className="text-7xl font-extrabold text-white mb-6">{code}</h1>
        <p className="text-gray-300 text-lg mb-8">{message}</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-xl shadow-[inset_4px_4px_15px_#0a0a0a,inset_-4px_-4px_15px_#121212] hover:shadow-[8px_8px_20px_#0a0a0a,-8px_-8px_20px_#121212] transition-shadow"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
