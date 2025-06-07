import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shortQuesSlice = createSlice({
  name: "shortQues",
  initialState,
  reducers: {
    setShortQues: (state, action) => {
      state.push(action.payload);
    },
    editShortQues: (state, action) => {
      const { index, updatedQuestion } = action.payload;
      state[index] = updatedQuestion;
    },
  },
});

export const { setShortQues, editShortQues } = shortQuesSlice.actions;
export default shortQuesSlice.reducer;
