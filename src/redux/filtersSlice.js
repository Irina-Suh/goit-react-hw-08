import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: ""
  }
};
const filtersSlice = createSlice({
    name: "filters",
 
    initialState,
    reducers: {
      changeFilter(state, action) {
        state.filters.name = action.payload;
      },
    },
  });
  export const selectFilter = (state) => state.filters.filters.name;
  export const { changeFilter } = filtersSlice.actions;
  export const filterReducer = filtersSlice.reducer;