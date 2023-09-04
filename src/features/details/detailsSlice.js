import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const detailsSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    createDetail(state, action) {
      if (state.detail.length !== 0) state.detail = [];
      state.detail.push(action.payload);
    },
  },
});

export const { createDetail } = detailsSlice.actions;

export default detailsSlice.reducer;
