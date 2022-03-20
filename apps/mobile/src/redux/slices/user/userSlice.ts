import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

const initialState: User = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action: PayloadAction<User>) => ({ ...action.payload }),
    clearUser: () => initialState,
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;