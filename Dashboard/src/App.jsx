import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenavigation from "./components/Sidenavigation"; // Includes both desktop and mobile sidenavigation
import SearchBar from "./components/SearchBar";

// Page Components
import DashboardPage from "./pages/DashboardPage";
import StudentsPage from "./pages/StudentsPage";
import ChapterPage from "./pages/ChapterPage";
import HelpPage from "./pages/HelpPage";
import ReportsPage from "./pages/ReportsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row h-screen" style={{ backgroundColor: "#F6F8FA" }}>
        {/* Sidebar for Desktop and Mobile */}
        <Sidenavigation />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Search Bar at the Top */}
          <div className="w-full">
            <SearchBar />
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 lg:ml-64 p-4 sm:p-6 overflow-auto mt-16">
            {/* Added mt-16 to give space for the Search Bar */}
            <Routes>
              {/* Routes for all pages */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/chapter" element={<ChapterPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
