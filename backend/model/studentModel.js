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
    // Fetch all student IDs
    const allStudents = await prisma.student.findMany({ select: { id: true } });
    const allIds = allStudents.map(student => student.id);

    // Find the smallest missing ID
    const nextId = Math.min(
      ...Array.from(
        { length: Math.max(...allIds, 0) + 2 }, // Handles empty database case
        (_, i) => i + 1
      ).filter(id => !allIds.includes(id))
    );

    // Insert the new student with the calculated ID
    return prisma.student.create({
      data: { ...data, id: nextId },
    });
  }

  static async updateStudent(id, data) {
    return prisma.student.update({ where: { id: parseInt(id) }, data });
  }

  static async deleteStudent(id) {
    return prisma.student.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = studentModel;
