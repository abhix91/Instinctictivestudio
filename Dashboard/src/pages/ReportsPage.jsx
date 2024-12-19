import React from "react";
import SearchBar from "../components/SearchBar";

const ReportsPage = () => {
  const reports = [
    { id: 1, studentName: "John Doe", course: "CBSE 9 Math", progress: "75%" },
    { id: 2, studentName: "Jane Smith", course: "CBSE 9 Science", progress: "82%" },
    { id: 3, studentName: "Michael Johnson", course: "CBSE 9 Math", progress: "65%" },
    { id: 4, studentName: "Emily Davis", course: "CBSE 9 Science", progress: "90%" },
  ];

  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search Bar */}
        <div className="w-full">
          <SearchBar />
        </div>

        {/* Page Content */}
        <div className="p-6 mt-16">
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-lg text-gray-600 mt-2">
            View and analyze performance reports, student progress, and course completion details.
          </p>

          {/* Sample Reports Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left text-gray-700 border-b">Student Name</th>
                  <th className="py-2 px-4 text-left text-gray-700 border-b">Course</th>
                  <th className="py-2 px-4 text-left text-gray-700 border-b">Progress</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 text-gray-800">{report.studentName}</td>
                    <td className="py-2 px-4 text-gray-800">{report.course}</td>
                    <td className="py-2 px-4 text-gray-800">{report.progress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Placeholder for Graph or Chart */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Performance Over Time</h2>
            <div className="mt-4 bg-gray-100 p-4 text-center rounded-md">
              <p className="text-gray-600">[Graph Placeholder: A performance chart or graph will be displayed here]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
