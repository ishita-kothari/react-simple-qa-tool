import { configureStore } from "@reduxjs/toolkit";
import questionAnswerReducer from "./qaSlice";

export default configureStore({
  reducer: {
    quesans: questionAnswerReducer,
  },
});
