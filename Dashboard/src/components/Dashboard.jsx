import React from "react";

const Dashboard = () => {
  const students = [
    { name: "Anshuman Kashyap", status: "green" },
    { name: "Bansi Dadhaniya", status: "green" },
    { name: "Chandrika Valotia", status: "red" },
    { name: "Devang Dave", status: "green" },
    { name: "Forum Bhatt", status: "green" },
    { name: "Hritika Dattani", status: "green" },
    { name: "Khushi Joshi", status: "green" },
    { name: "Mansi Patel", status: "green" },
    { name: "Nita Shah", status: "red" },
    { name: "Priyanshu Shrivastava", status: "green" },
    { name: "Shreya Singhalia", status: "green" },
    
  ];

  return (
    <>
      {/* Dashboard for Large Screens */}
      <div
        className="hidden lg:block rounded-lg shadow-md p-6 absolute"
        style={{
          backgroundColor: "#FFFFFF",
          width: "1152px",
          height: "664px",
          top: "81px",
          left: "268px",
          borderRadius: "12px",
        }}
      >
        {/* Filters */}
        <div className="flex justify-between items-center mb-4">
          <div className="space-x-4">
            <select
              className="border rounded px-4 py-2 text-black"
              style={{ backgroundColor: "#E9EDF1" }}
            >
              <option>AY 2024-25</option>
            </select>
            <select
              className="border rounded px-4 py-2 text-black"
              style={{ backgroundColor: "#E9EDF1" }}
            >
              <option>CBSE 9</option>
            </select>
          </div>
          <button
            className="text-black rounded px-4 py-2 flex items-center"
            style={{
              backgroundColor: "#E9EDF1",
            }}
          >
            <span className="mr-2 text-lg">+</span> Add new Student
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-#FFFFFF">
              <th className="p-3">Student Name</th>
              <th className="p-3">Cohort</th>
              <th className="p-3">Courses</th>
              <th className="p-3">Date Joined</th>
              <th className="p-3">Last login</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-3">{student.name}</td>
                <td className="p-3">AY 2024-25</td>
                <td className="p-3">
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/images/course1.png"
                        alt="CBSE Science"
                        className="h-6 w-6"
                      />
                      <span>CBSE 9 Science</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/images/course2.png"
                        alt="CBSE Math"
                        className="h-6 w-6"
                      />
                      <span>CBSE 9 Math</span>
                    </div>
                  </div>
                </td>
                <td className="p-3">17. Nov. 2024</td>
                <td className="p-3">17. Nov. 2024 4:16 PM</td>
                <td className="p-3">
                  <span
                    className={`inline-block h-3 w-3 rounded-full ${
                      student.status === "green" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dashboard for Mobile Screens */}
      <div className="lg:hidden bg-white rounded-lg shadow-md p-4 m-4">
        {/* Filters */}
        <div className="flex flex-col space-y-4 mb-4">
          <select
            className="border rounded px-4 py-2 text-black"
            style={{ backgroundColor: "#E9EDF1" }}
          >
            <option>AY 2024-25</option>
          </select>
          <select
            className="border rounded px-4 py-2 text-black"
            style={{ backgroundColor: "#E9EDF1" }}
          >
            <option>CBSE 9</option>
          </select>
          <button
  className="text-black rounded px-4 py-2 flex items-center font-bold"
  style={{
    backgroundColor: "#E9EDF1",
  }}
>
  <span
    className="flex items-center justify-center"
    style={{
      fontSize: "2.5px", // Plus sign size
      lineHeight: "2.5px", // Ensure height matches
      width: "2.5px", // Match width
      height: "2.5px",
    }}
  >
    +
  </span>
  <span className="ml-2 text-lg font-bold">Add new Student</span>
</button>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-#FFFFFF">
                <th className="p-3">Student Name</th>
                <th className="p-3">Cohort</th>
                <th className="p-3">Courses</th>
                <th className="p-3">Date Joined</th>
                <th className="p-3">Last login</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">AY 2024-25</td>
                  <td className="p-3">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <img
                          src="/images/course1.png"
                          alt="CBSE Science"
                          className="h-6 w-6"
                        />
                        <span>CBSE 9 Science</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <img
                          src="/images/course2.png"
                          alt="CBSE Math"
                          className="h-6 w-6"
                        />
                        <span>CBSE 9 Math</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">17. Nov. 2024</td>
                  <td className="p-3">17. Nov. 2024 4:16 PM</td>
                  <td className="p-3">
                    <span
                      className={`inline-block h-3 w-3 rounded-full ${
                        student.status === "green" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
