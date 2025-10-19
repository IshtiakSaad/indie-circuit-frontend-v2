import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-12 px-6">
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Indie Circuit Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
