import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const SettingsPage = () => {
  // State to handle form data
  const [settings, setSettings] = useState({
    name: "Adeline H. Dancy",
    email: "adeline.dancy@example.com",
    theme: "Light",
    notifications: true,
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="w-full">
          <SearchBar />
        </div>

        {/* Page Content */}
        <div className="p-6 mt-4"> {/* Reduced margin-top to mt-4 */}
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-lg text-gray-600 mt-2">
            Update your account and application settings here.
          </p>

          {/* Account Settings */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Account Settings</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
            </form>
          </div>

          {/* Application Settings */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Application Settings</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Theme</label>
                <select
                  name="theme"
                  value={settings.theme}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </select>
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Enable notifications
                </label>
              </div>
            </form>
          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
