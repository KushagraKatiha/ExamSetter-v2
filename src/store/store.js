import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./features/questionPaperDetails/detailsSlice";
import longQuesSlice from "./features/questions/longQuesSlice";
import shortQuesSlice from "./features/questions/shortQuesSlice";

const store = configureStore({
    reducer: {
        details: detailsSlice,
        longQues: longQuesSlice,
        shortQues: shortQuesSlice
    }
});

export default store;