import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
// createSliceにはname,initialState,reducersの3つが必要になる
  // スライスの名前 type:"name/○○"
  name: "chat",
  initialState: {
    chatId: null,
    chatName:null
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.chatName = action.payload.chatName
    },
 
  },
});

// この記述で自動的にactionが発行される
export const {setChat } = chatSlice.actions;

// useSelectorのみたいな働きをする
export const selectChatName = (state) => state.chat.chatName;
export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer;
