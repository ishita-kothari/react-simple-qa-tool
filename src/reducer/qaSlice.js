import { createSlice } from "@reduxjs/toolkit";

const sortList = (list) => {
  return list.sort((a, b) => {
    const caseSensitiveA = a.question.toLowerCase();
    const caseSensitiveB = b.question.toLowerCase();
    return caseSensitiveA > caseSensitiveB ? 1 : -1;
  });
};
export const qaSlice = createSlice({
  name: "quesans",
  initialState: { list: [] },
  reducers: {
    add: (state, { payload }) => {
      const data = payload;
      //   data["id"] = Math.floor(Math.random() * 100);
      data["id"] = Math.random().toString(16).slice(2);
      state.list.push(payload);
    },
    deleteItem: (state, { payload }) => {
      state.list = state.list.filter((i) => i.id !== payload.id);
    },
    sortQuestions: (state, { payload }) => {
      if (payload === "asc") {
        state.list = sortList(state.list);
      } else {
        state.list = sortList(state.list).reverse();
      }
    },
    deleteAllQuestions: (state) => {
      state.list = [];
    },
    editQuestion: (state, { payload }) => {
      const objIndex = state.list.findIndex((i) => i.id === payload.id);
      const updatedObj = {
        ...state.list[objIndex],
        question: payload.question,
        answer: payload.answer,
      };
      state.list = [
        ...state.list.slice(0, objIndex),
        updatedObj,
        ...state.list.slice(objIndex + 1),
      ];
    },
  },
});
export const {
  add,
  deleteItem,
  sortQuestions,
  deleteAllQuestions,
  editQuestion,
} = qaSlice.actions;

export const addAsync = (item) => (dispatch) => {
  setTimeout(() => {
    dispatch(add(item));
  }, 5000);
};

export default qaSlice.reducer;
