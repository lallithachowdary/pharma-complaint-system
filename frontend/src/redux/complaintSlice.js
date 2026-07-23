import { createSlice } from "@reduxjs/toolkit";

const complaintSlice = createSlice({
  name: "complaints",

  initialState: {
    complaints: [],
  },

  reducers: {
    setComplaints(state, action) {
      state.complaints = action.payload;
    },

    addComplaint(state, action) {
      state.complaints.push(action.payload);
    },
  },
});

export const { setComplaints, addComplaint } =
  complaintSlice.actions;

export default complaintSlice.reducer;