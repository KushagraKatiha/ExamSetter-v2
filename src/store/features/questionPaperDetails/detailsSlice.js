import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questionPaperDetails: {},
    disabled: false
}

const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers:{
        setDetails: (state, action) => {
            state.questionPaperDetails = action.payload;
            state.disabled = true;
        }, 
        editDetails: (state) => {
            state.disabled = false;
        },
    }
});

export const { setDetails, editDetails } = detailsSlice.actions;
export default detailsSlice.reducer;