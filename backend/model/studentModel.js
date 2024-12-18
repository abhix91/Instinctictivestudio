const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class studentModel {
  static async getAllStudents() {
    return prisma.student.findMany();
  }

  static async getStudentById(id) {
    return prisma.student.findUnique({ where: { id: parseInt(id) } });
  }

  static async createStudent(data) {
    return prisma.student.create({ data });
  }

  static async updateStudent(id, data) {
    return prisma.student.update({ where: { id: parseInt(id) }, data });
  }

  static async deleteStudent(id) {
    return prisma.student.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = studentModel;
