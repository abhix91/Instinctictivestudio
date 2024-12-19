import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, createStudent, updateStudent, deleteStudent } from "../state/studentSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileDashboard = () => {
  const [newStudent, setNewStudent] = useState({ name: "", cohort: "AY 2024-25", courses: [] });
  const [editStudent, setEditStudent] = useState(null); // Store the student to edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Modal for editing student data
  const dispatch = useDispatch();
  const { list: students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleDeleteStudent = async (id) => {
    try {
      await dispatch(deleteStudent(id));
      toast.success("Student deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete student.");
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.cohort || newStudent.courses.length === 0) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    dispatch(createStudent({
      Name: newStudent.name,
      Cohort: newStudent.cohort,
      Courses: newStudent.courses.join(", "),
    }));
    toast.success("Student added successfully!");
    setNewStudent({ name: "", cohort: "AY 2024-25", courses: [] });
    setIsModalOpen(false);
  };

  const handleEditStudent = async (e) => {
    e.preventDefault();
    if (!editStudent.Name || !editStudent.Cohort || editStudent.Courses.length === 0) {
      toast.error("Please fill in all fields before updating.");
      return;
    }
    dispatch(updateStudent({
      id: editStudent.id,
      studentData: {
        Name: editStudent.Name,
        Cohort: editStudent.Cohort,
        Courses: editStudent.Courses.join(", "),
      },
    }));
    toast.success("Student updated successfully!");
    setIsEditModalOpen(false);
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
    <div className="lg:hidden bg-white min-h-screen p-4">
      <ToastContainer />
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold text-gray-800">Students</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
          onClick={() => setIsModalOpen(true)} // Open modal on "+ Add" click
        >
          + Add
        </button>
      </div>

      {/* Student List */}
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-gray-800 font-medium text-sm">{student.Name}</h2>
              <button
                onClick={() => handleDeleteStudent(student.id)} // Pass the student ID to handleDeleteStudent
                className="bg-red-500 text-white px-2 py-1 text-xs rounded"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setEditStudent(student);  // Set the student to be edited
                  setIsEditModalOpen(true);
                }}
                className="bg-blue-500 text-white px-2 py-1 text-xs rounded"
              >
                Update
              </button>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              <p><strong>Cohort:</strong> {student.Cohort}</p>
              <p>
                <strong>Courses:</strong>{" "}
                {student.Courses.split(", ").map((course) => (
                  <span
                    key={course}
                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2 inline-block"
                  >
                    {course}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading and Error States */}
      {loading && <p className="text-gray-600 text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

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

export default MobileDashboard;
