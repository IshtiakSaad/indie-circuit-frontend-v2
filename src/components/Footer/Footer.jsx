import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Sales and Refunds</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Site Map</a></li>
          </ul>
        </div>
                <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Sales and Refunds</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Site Map</a></li>
          </ul>
        </div>
                <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Sales and Refunds</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Site Map</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Indie Circuit Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
