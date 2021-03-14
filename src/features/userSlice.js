import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
// createSliceにはname,initialState,reducersの3つが必要になる
  // スライスの名前 type:"name/○○"
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

// この記述で自動的にactionが発行される
export const { login, logout } = userSlice.actions;

// useSelectorのみたいな働きをする
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
