const StudentModel = require('../model/studentModel');

class studentController {
  static async getAll(req, res) {
    try {
      const students = await StudentModel.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const student = await StudentModel.getStudentById(req.params.id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const student = await StudentModel.createStudent(req.body); // Use the model method
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const student = await StudentModel.updateStudent(req.params.id, req.body);
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

  static async delete(req, res) {
    try {
      const deletedStudent = await StudentModel.deleteStudent(req.params.id);
      res.status(200).json({
        message: "Deleted successfully",
        student: deletedStudent,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = studentController;
