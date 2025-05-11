import { createAsyncThunk } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
import { goitAPI } from "../auth/operations";

// axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }
    setAuthHeader(persistedToken);
    try {
      const response = await goitAPI.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No token found");
    }
    setAuthHeader(persistedToken);
    try {
      const response = await goitAPI.post("/contacts", { name, number});
      toast.success("You successfully added a new contact");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const response = await goitAPI.delete(`/contacts/${taskId}`);
      toast.success("You successfully deleted a contact");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);