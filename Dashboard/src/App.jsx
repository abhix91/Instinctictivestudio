import React from "react";
import Sidenavigation from "./components/Sidenavigation";
import SearchBar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";


const App = () => {
  return (
    <div
      className="flex flex-col lg:flex-row h-screen"
      style={{ backgroundColor: "#F6F8FA" }} // Default background color
    >
      {/* Sidebar - Hidden on Mobile, Visible on Larger Screens */}
      <Sidenavigation />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar at the Top */}
        <div className="w-full">
          <SearchBar />
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 flex-1 overflow-auto">
          
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
