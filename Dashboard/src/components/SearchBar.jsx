import React from "react";

const SearchBar = () => {
  return (
    <div
      className="bg-##F6F8FA flex items-center justify-between "
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
        <img
          src="/images/search1.png"
          alt="Search Icon"
          style={{ height: "24px", width: "24px" }}
        />
        <input
          type="text"
          placeholder="Search your course"
          className="w-full outline-none text-gray-700"
          style={{ background: "white" }}
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 relative">
        {/* Search1 */}
        <button>
          <img
            src="/images/search1.png"
            alt="Search1"
            style={{ height: "24px", width: "24px" }}
          />
        </button>

        {/* Search2 with Red Dot */}
        <button className="relative">
          <img
            src="/images/search2.png"
            alt="Search2"
            style={{ height: "24px", width: "24px" }}
          />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Search3 */}
        <button>
          <img
            src="/images/search3.png"
            alt="Search3"
            style={{ height: "24px", width: "24px" }}
          />
        </button>

        {/* Search4 with Red Dot */}
        <button className="relative">
          <img
            src="/images/search4.png"
            alt="Search4"
            style={{ height: "24px", width: "24px" }}
          />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Section */}
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
  );
};

export default SearchBar;
