import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

const ChapterPage = () => {
  const [chapters, setChapters] = useState([
    { id: 1, title: "Algebra Basics", subject: "Math", description: "Introduction to Algebra, equations, and expressions." },
    { id: 2, title: "Geometry", subject: "Math", description: "Understanding shapes, areas, and volumes." },
    { id: 3, title: "Physics Basics", subject: "Science", description: "Basic concepts of Physics, motion, and forces." },
    { id: 4, title: "Chemistry Fundamentals", subject: "Science", description: "Introduction to atoms, molecules, and chemical reactions." },
  ]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedChapter, setEditedChapter] = useState(null);

  // Handle Delete Chapter
  const handleDeleteChapter = (id) => {
    const updatedChapters = chapters.filter((chapter) => chapter.id !== id);
    setChapters(updatedChapters);
  };

  // Handle Edit Chapter
  const handleEditChapter = (e) => {
    e.preventDefault();
    const updatedChapters = chapters.map((chapter) =>
      chapter.id === editedChapter.id
        ? { ...chapter, title: editedChapter.title, subject: editedChapter.subject, description: editedChapter.description }
        : chapter
    );
    setChapters(updatedChapters);
    setIsEditModalOpen(false);
  };

  // Handle Input Change for Edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedChapter({ ...editedChapter, [name]: value });
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
        <div className="p-6 mt-4">
          <h1 className="text-2xl font-bold text-gray-800">Chapters</h1>
          <p className="text-lg text-gray-600 mt-2">
            Manage chapters and course content for various subjects such as Maths and Science.
          </p>

          {/* Chapters Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <div key={chapter.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{chapter.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{chapter.subject}</p>
                <p className="text-gray-700 mt-4">{chapter.description}</p>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end space-x-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    onClick={() => {
                      setEditedChapter(chapter);
                      setIsEditModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                    onClick={() => handleDeleteChapter(chapter.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Chapter Modal */}
      {isEditModalOpen && editedChapter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Edit Chapter</h2>
            <form onSubmit={handleEditChapter}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={editedChapter.title}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={editedChapter.subject}
                  onChange={handleInputChange}
                  className="border rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={editedChapter.description}
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

export default ChapterPage;
