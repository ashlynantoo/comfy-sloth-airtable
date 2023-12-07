import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    clearIsAuthenticated: (state) => {
      state.isAuthenticated = false;
    },
    addUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
    removeUser: (state) => {
      state.user = null;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export default userSlice.reducer;
export const {
  setIsAuthenticated,
  clearIsAuthenticated,
  addUser,
  removeUser,
  openSidebar,
  closeSidebar,
} = userSlice.actions;
