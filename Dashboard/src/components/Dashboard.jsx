import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../state/studentSlice";

const Dashboard = () => {
  const [newStudent, setNewStudent] = useState({ name: "", cohort: "AY 2024-25", courses: [] });
  const [editStudent, setEditStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { list: students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    dispatch(
      createStudent({
        Name: newStudent.name,
        Cohort: newStudent.cohort,
        Courses: newStudent.courses.join(", "),
      })
    );
    setNewStudent({ name: "", cohort: "AY 2024-25", courses: [] });
    setIsModalOpen(false);
  };

  const handleEditStudent = async (e) => {
    e.preventDefault();
    dispatch(
      updateStudent({
        id: editStudent.id,
        studentData: {
          Name: editStudent.Name,
          Cohort: editStudent.Cohort,
          Courses: editStudent.Courses.join(", "),
        },
      })
    );
    setEditStudent(null);
    setIsEditModalOpen(false);
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  const handleCourseChange = (e) => {
    const selectedCourses = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewStudent({ ...newStudent, courses: selectedCourses });
  };

  const handleEditCourseChange = (e) => {
    const selectedCourses = Array.from(e.target.selectedOptions, (option) => option.value);
    setEditStudent({ ...editStudent, Courses: selectedCourses });
  };

  return (
    <>
      {/* Dashboard */}
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
            onClick={() => setIsModalOpen(true)}
            className="text-black rounded px-4 py-2 flex items-center"
            style={{ backgroundColor: "#E9EDF1" }}
          >
            <span className="mr-2 text-lg">+</span> Add new Student
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Student Name</th>
              <th className="p-3">Cohort</th>
              <th className="p-3">Courses</th>
              <th className="p-3">Date Joined</th>
              <th className="p-3">Last Login</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{student.Name}</td>
                <td className="p-3">{student.Cohort}</td>
                <td className="p-3">{student.Courses}</td>
                <td className="p-3">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(student.JoinedAt))}
                </td>
                <td className="p-3">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }).format(new Date(student.LastLogin))}
                </td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => {
                      setEditStudent(student);
                      setIsEditModalOpen(true);
                    }}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteStudent(student.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Student */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Student</h2>
            <form onSubmit={handleAddStudent}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cohort</label>
                <select
                  name="cohort"
                  value={newStudent.cohort}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                >
                  <option>AY 2024-25</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Courses</label>
                <select
                  multiple
                  value={newStudent.courses}
                  onChange={handleCourseChange}
                  className="border rounded px-4 py-2 w-full"
                >
                  <option value="CBSE 9 Science">CBSE 9 Science</option>
                  <option value="CBSE 9 Math">CBSE 9 Math</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Editing Student */}
      {isEditModalOpen && editStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Student</h2>
            <form onSubmit={handleEditStudent}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="Name"
                  value={editStudent.Name}
                  onChange={handleEditInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Cohort</label>
                <select
                  name="Cohort"
                  value={editStudent.Cohort}
                  onChange={handleEditInputChange}
                  className="border rounded px-4 py-2 w-full"
                >
                  <option>AY 2024-25</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Courses</label>
                <select
                  multiple
                  value={editStudent.Courses}
                  onChange={handleEditCourseChange}
                  className="border rounded px-4 py-2 w-full"
                >
                  <option value="CBSE 9 Science">CBSE 9 Science</option>
                  <option value="CBSE 9 Math">CBSE 9 Math</option>
                </select>
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
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
