import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shortQuesSlice = createSlice({
  name: "shortQues",
  initialState,
  reducers: {
    setShortQues: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setShortQues } = shortQuesSlice.actions;
export default shortQuesSlice.reducer;
