import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Adam Pudzianowski" },
  { id: "1", name: "Brat Pit" },
  { id: "2", name: "Brian Trace" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
