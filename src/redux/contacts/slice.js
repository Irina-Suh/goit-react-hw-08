import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { logOut } from "../auth/operations";
import { addContact, deleteContact, fetchContacts } from "./operations";


 const initialState = {
  
   items: [],
   loading: false,
   error: null,
  
  
  }
  
  const handlePending = (state) => {
    state.loading = true;
  };
  
  const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }; 
  


const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
  
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      })
      .addCase(logOut.fulfilled, () => initialState)
      
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContact.pending,
          addContact.pending
        ),
        handlePending
      )
  
  },
});

export const contactsReducer = contactsSlice.reducer;

