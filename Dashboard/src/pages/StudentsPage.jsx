import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const StudentsPage = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", cohort: "AY 2024-25", courses: "Math, Science" },
    { id: 2, name: "Jane Smith", cohort: "AY 2024-25", courses: "Math, English" },
    { id: 3, name: "Michael Johnson", cohort: "AY 2024-25", courses: "Science, History" },
    { id: 4, name: "Emily Davis", cohort: "AY 2024-25", courses: "English, History" },
  ]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);

  // Handle Delete
  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  // Handle Edit
  const handleEditStudent = (e) => {
    e.preventDefault();
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id
        ? { ...student, name: editedStudent.name, cohort: editedStudent.cohort, courses: editedStudent.courses }
        : student
    );
    setStudents(updatedStudents);
    setIsEditModalOpen(false);
  };

  // Handle Input Change for Edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  return (
    <div className="flex flex-col p-4">
      {/* Search Bar */}
      <div className="w-full mb-4">
        <SearchBar />
      </div>

      {/* Page Content */}
      <div className="flex flex-col p-6">
        <h1 className="text-2xl font-bold text-gray-800">Students</h1>
        <p className="text-lg text-gray-600 mt-2">
          Manage and view all student information here. You can add, edit, and delete students.
        </p>

        {/* Student Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left text-gray-700 border-b">Student Name</th>
                <th className="py-2 px-4 text-left text-gray-700 border-b">Cohort</th>
                <th className="py-2 px-4 text-left text-gray-700 border-b">Courses</th>
                <th className="py-2 px-4 text-left text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 text-gray-800">{student.name}</td>
                  <td className="py-2 px-4 text-gray-800">{student.cohort}</td>
                  <td className="py-2 px-4 text-gray-800">{student.courses}</td>
                  <td className="py-2 px-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => {
                        setEditedStudent(student);
                        setIsEditModalOpen(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Student</h2>
            <form onSubmit={handleEditStudent}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedStudent?.name || ""}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cohort</label>
                <select
                  name="cohort"
                  value={editedStudent?.cohort || ""}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                >
                  <option>AY 2024-25</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Courses</label>
                <input
                  type="text"
                  name="courses"
                  value={editedStudent?.courses || ""}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
