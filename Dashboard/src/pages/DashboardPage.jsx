import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Dashboard from "../components/Dashboard"; // Import the Dashboard component
import MobileDashboard from "../components/Mobiledashboard"; // Import the Mobile Dashboard component

const DashboardPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen width
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for "lg" screens in Tailwind
    };

    checkMobileScreen(); // Check on initial load

    // Add event listener to handle window resize
    window.addEventListener("resize", checkMobileScreen);

    return () => {
      window.removeEventListener("resize", checkMobileScreen); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="w-full">
          <SearchBar />
        </div>

        {/* Dashboard Component */}
        <div className="p-6">
          {isMobile ? (
            <MobileDashboard /> 
          ) : (
            <Dashboard /> 
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
