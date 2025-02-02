import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArchive, FaSignOutAlt } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-1/2 overflow-hidden transform -translate-y-1/2 h-auto w-16 bg-[#2C3E50] text-white shadow-lg rounded-r-lg flex flex-col items-center py-4 z-10">
      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        <Link
          to="/"
          className="flex flex-col items-center justify-center hover:bg-[#34495e] p-3 rounded-lg transition-colors"
        >
          <FaHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/archive"
          className="flex flex-col items-center justify-center hover:bg-[#34495e] p-3 rounded-lg transition-colors"
        >
          <FaArchive size={24} />
          <span className="text-xs mt-1">Archive</span>
        </Link>
        <Link
          to="/sender"
          className="flex flex-col items-center justify-center hover:bg-[#34495e] p-3 rounded-lg transition-colors"
        >
          <BiMessageSquareDetail size={24} />
          <span className="text-xs mt-1">Send</span>
        </Link>
        <button
          className="flex flex-col items-center justify-center hover:bg-red-500 p-3 rounded-lg transition-colors"
          onClick={() => console.log("Logout")}
        >
          <FaSignOutAlt size={24} />
          <span className="text-xs mt-1">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
