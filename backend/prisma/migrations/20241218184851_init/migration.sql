-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Cohort" TEXT NOT NULL,
    "Courses" TEXT NOT NULL,
    "JoinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "LastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
