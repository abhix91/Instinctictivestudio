import React from "react";
import SearchBar from "../components/SearchBar";

const HelpPage = () => {
  return (
    <div>
      <SearchBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Help</h1>
        <p className="mt-4 text-lg text-gray-600">
          Find FAQs and support information here.
        </p>

        {/* FAQ Section */}
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              1. How do I add a new student?
            </h2>
            <p className="text-gray-600 mt-2">
              To add a new student, navigate to the "Dashboard" and click on
              the "Add new Student" button. Enter the student's name, cohort,
              and select the courses they are enrolled in. Once done, click
              "Add" to save the student's information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              2. How can I edit a student's information?
            </h2>
            <p className="text-gray-600 mt-2">
              To edit a student's information, go to the "Dashboard" page,
              find the student you want to update, and click the "Update"
              button. Modify the student's details and click "Update" again to
              save the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              3. How do I delete a student from the system?
            </h2>
            <p className="text-gray-600 mt-2">
              To delete a student, visit the "Dashboard" page and locate the
              student you wish to remove. Click the "Delete" button next to
              their name. A confirmation prompt will appear, and once confirmed,
              the student's information will be permanently removed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              4. Can I change a student's courses?
            </h2>
            <p className="text-gray-600 mt-2">
              Yes, you can update a student's enrolled courses by editing the
              student's profile. Click the "Update" button, select or deselect
              courses, and save the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              5. How can I track student progress in courses?
            </h2>
            <p className="text-gray-600 mt-2">
              Student progress tracking will be available soon in the "Reports"
              section, where you can view detailed performance reports for each
              student based on their enrollment in different courses.
            </p>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-700">Need more help?</h2>
          <p className="text-gray-600 mt-2">
            If you need further assistance or have any questions not covered here,
            feel free to reach out to our support team. We are here to help!
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
