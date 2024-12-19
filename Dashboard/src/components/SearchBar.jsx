import React, { useState } from "react"; 
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for the search bar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // for the sidebar toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // toggles mobile search bar
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // toggles sidebar visibility
  };

  return (
    <>
      {/* Desktop SearchBar */}
      <div
        className="hidden lg:flex bg-##F6F8FA items-center justify-between"
        style={{
          width: "1152px",
          height: "48px",
          position: "absolute",
          top: "20px",
          left: "268px",
          padding: "0 12px",
          borderRadius: "12px",
        }}
      >
        {/* Search Input */}
        <div
          className="flex items-center bg-white rounded-lg shadow-sm"
          style={{
            width: "614px",
            height: "48px",
            padding: "14px 210px 14px 20px",
            borderRadius: "12px",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Search your course"
            className="w-full outline-none text-gray-700"
            style={{ background: "white" }}
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 relative">
          <button>
            <img
              src="/images/search1.png"
              alt="Search1"
              style={{ height: "24px", width: "24px" }}
            />
          </button>
          <button className="relative">
            <img
              src="/images/search2.png"
              alt="Search2"
              style={{ height: "24px", width: "24px" }}
            />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button>
            <img
              src="/images/search3.png"
              alt="Search3"
              style={{ height: "24px", width: "24px" }}
            />
          </button>
          <button className="relative">
            <img
              src="/images/search4.png"
              alt="Search4"
              style={{ height: "24px", width: "24px" }}
            />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="/images/user.png"
              alt="User Profile"
              style={{ height: "48px", width: "48px" }}
              className="rounded-full"
            />
            <span className="text-gray-700 font-medium">Adeline H. Dancy</span>
          </div>
        </div>
      </div>

      {/* Mobile SearchBar */}
      <div
        className="flex lg:hidden bg-white shadow-sm fixed top-0 left-0 w-full px-4 py-2 items-center justify-between"
        style={{
          zIndex: 50,
        }}
      >
        {/* Hamburger Menu Button */}
        <div
          className="text-white p-2 rounded cursor-pointer z-50"
          style={{ position: 'absolute', left: '16px' }} // Added left positioning to prevent overlap
          onClick={toggleSidebar} // Toggle sidebar visibility
        >
          <img src="/images/more.png" alt="Menu" className="h-6 w-6" />
        </div>

        {/* Search Input */}
        <div
          className="flex items-center bg-gray-100 rounded-lg ml-10" // Added margin-left to create space for the hamburger icon
          style={{
            flexGrow: 1,
            padding: "8px 12px",
            borderRadius: "12px",
            gap: "8px",
          }}
        >
          <input
            type="text"
            placeholder="Search your course"
            className="w-full outline-none text-gray-700 bg-gray-100"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 ml-4">
          <button>
            <img
              src="/images/search2.png"
              alt="Notification Icon"
              style={{ height: "20px", width: "20px" }}
            />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button>
            <img
              src="/images/search3.png"
              alt="Search Icon"
              style={{ height: "20px", width: "20px" }}
            />
          </button>
          <div>
            <img
              src="/images/user.png"
              alt="User Profile"
              style={{ height: "32px", width: "32px" }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Hidden initially, shown on hamburger click) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white text-gray-700 p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          zIndex: 50,
        }}
      >
        {/* Sidebar Content */}
        <nav className="flex-1 space-y-4">
          <ul>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/dashboard.png" alt="Dashboard" className="h-6 w-6 mr-3" />
              <Link to="/">Dashboard</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/student.png" alt="Students" className="h-6 w-6 mr-3" />
              <Link to="/students">Students</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/chapter.png" alt="Chapter" className="h-6 w-6 mr-3" />
              <Link to="/chapter">Chapter</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/help.png" alt="Help" className="h-6 w-6 mr-3" />
              <Link to="/help">Help</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/Reports.png" alt="Reports" className="h-6 w-6 mr-3" />
              <Link to="/reports">Reports</Link>
            </li>
            <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer rounded">
              <img src="/images/setting.png" alt="Settings" className="h-6 w-6 mr-3" />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SearchBar;
