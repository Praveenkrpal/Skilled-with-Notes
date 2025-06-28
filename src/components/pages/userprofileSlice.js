// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Alex",
  bio: "Frontend Developer | React Enthusiast",
  joinedDate: "January 2023"
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateProfile: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateAvatar, updateProfile } = userSlice.actions;
export default userSlice.reducer;