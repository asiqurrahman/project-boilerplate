import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: null,
  profilePic: null,
  uid: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const userData = action.payload;
      state.isAuthenticated = true;
      state.email = userData.email;
      state.profilePic = userData.photoURL;
      state.uid = userData.uid;
    },
  },
});

export function selectUsername(state) {
  return state.user.email;
}

export function selectProfilePic(state) {
  return state.user.profilePic;
}

export function selectUserUid(state) {
  return state.user.uid;
}

export function selectIsAuthenticated(state) {
  return state.user.isAuthenticated;
}

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
