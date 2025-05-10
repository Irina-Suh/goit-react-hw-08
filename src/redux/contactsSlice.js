import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFilter } from "./filtersSlice";


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
  }
);


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

