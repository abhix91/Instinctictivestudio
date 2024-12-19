import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Base API URL
const API_URL = "http://localhost:5000/students/";

// Fetch all students
export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch students");
  return response.json();
});

// Add a new student
export const addStudent = createAsyncThunk("students/addStudent", async (student) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error("Failed to add student");
  return response.json();
});

// Update a student
export const updateStudent = createAsyncThunk("students/updateStudent", async (student) => {
  const response = await fetch(`${API_URL}${student.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) throw new Error("Failed to update student");
  return response.json();
});

// Delete a student
export const deleteStudent = createAsyncThunk("students/deleteStudent", async (id) => {
  const response = await fetch(`${API_URL}${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete student");
  return id; // Return ID to remove it from the state
});

// Slice
const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s.id === action.payload.id);
        if (index !== -1) state.students[index] = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((student) => student.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
