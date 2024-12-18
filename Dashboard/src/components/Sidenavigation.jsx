import React from "react";

const Sidenavigation = () => {
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
              <img
                src="/images/dashboard.png"
                alt="Dashboard"
                className="h-6 w-6 mr-3"
              />
              Dashboard
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img
                src="/images/student.png"
                alt="Students"
                className="h-6 w-6 mr-3"
              />
              Students
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img
                src="/images/chapter.png"
                alt="Chapter"
                className="h-6 w-6 mr-3"
              />
              Chapter
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img
                src="/images/help.png"
                alt="Help"
                className="h-6 w-6 mr-3"
              />
              Help
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img
                src="/images/Reports.png"
                alt="Reports"
                className="h-6 w-6 mr-3"
              />
              Reports
            </li>
            <li className="flex items-center px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer rounded">
              <img
                src="/images/setting.png"
                alt="Settings"
                className="h-6 w-6 mr-3"
              />
              Settings
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidenavigation;
