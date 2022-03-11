import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    value: {},
  },
  reducers: {
    addBlog: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addBlog } = blogSlice.actions;
export default blogSlice.reducer;
