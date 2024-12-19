import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async actions for CRUD operations
export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
  const response = await fetch("https://instinctictivestudio-1.onrender.com/students/");
  return response.json();
});

export const createStudent = createAsyncThunk("students/createStudent", async (studentData) => {
  const response = await fetch("https://instinctictivestudio-1.onrender.com/students/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return response.json();
});

export const updateStudent = createAsyncThunk("students/updateStudent", async ({ id, studentData }) => {
  const response = await fetch(`https://instinctictivestudio-1.onrender.com/students/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return response.json();
});

export const deleteStudent = createAsyncThunk("students/deleteStudent", async (id) => {
  await fetch(`https://instinctictivestudio-1.onrender.com/students/${id}`, { method: "DELETE" });
  return id;
});

const studentSlice = createSlice({
  name: "students",
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.list.findIndex((student) => student.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((student) => student.id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
