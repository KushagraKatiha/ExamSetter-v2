import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const longQuesSlice = createSlice({
  name: "longQues",
  initialState,
  reducers: {
    setLongQues: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { setLongQues } = longQuesSlice.actions;
export default longQuesSlice.reducer;
