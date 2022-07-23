import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null || JSON.parse(localStorage.getItem('authUser')),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    removeUser(state) {
      state.currentUser = null;
    },
  },
});

export const { setUser, removeUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
