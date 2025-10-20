import React from "react";

const ErrorPage = ({ code = 404, message = "Something went wrong" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-16 rounded-3xl shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] text-center max-w-sm w-full">
        <h1 className="text-7xl font-extrabold text-gray-800 mb-6">{code}</h1>
        <p className="text-gray-500 text-lg mb-8">{message}</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-white text-gray-800 font-medium rounded-xl shadow-[inset_4px_4px_15px_#d1d1d1,inset_-4px_-4px_15px_#ffffff] hover:shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] transition-shadow"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
