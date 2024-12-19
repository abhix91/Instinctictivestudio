import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenavigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  return (
    <>
      {/* Sidebar for Larger Screens */}
      <div className="hidden lg:flex flex-col bg-white h-screen w-64 shadow-md p-6 fixed top-0 left-0">
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-4">
          <ul>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/dashboard.png" alt="Dashboard" className="h-6 w-6 mr-3" />
              <Link to="/">Dashboard</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/student.png" alt="Students" className="h-6 w-6 mr-3" />
              <Link to="/students">Students</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/chapter.png" alt="Chapter" className="h-6 w-6 mr-3" />
              <Link to="/chapter">Chapter</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/help.png" alt="Help" className="h-6 w-6 mr-3" />
              <Link to="/help">Help</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/Reports.png" alt="Reports" className="h-6 w-6 mr-3" />
              <Link to="/reports">Reports</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/setting.png" alt="Settings" className="h-6 w-6 mr-3" />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar for Mobile Screens */}
      
    </>
  );
};

export default Sidenavigation;
