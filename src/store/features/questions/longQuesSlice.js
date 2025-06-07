import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const longQuesSlice = createSlice({
  name: "longQues",
  initialState,
  reducers: {
    setLongQues: (state, action) => {
      state.push(action.payload);
    },
    editLongQues: (state, action) => {
      const { index, updatedQuestion } = action.payload;
      state[index] = updatedQuestion;
    }
  }
});

export const { setLongQues, editLongQues } = longQuesSlice.actions;
export default longQuesSlice.reducer;
