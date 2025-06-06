import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from "react-hot-toast";


export const goitAPI = axios.create({
    baseURL: "https://connections-api.goit.global/",
  });

const setAuthHeader = (token) => {
    goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
    goitAPI.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const res = await goitAPI.post('/users/signup', body);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
     
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (body, thunkAPI) => {
    try {
      const res = await goitAPI.post('/users/login', body);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
        toast.error("Wrong email or password");
      return thunkAPI.rejectWithValue(error.message);
     
    }
  }
);


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await goitAPI.post('/users/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
   
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
  
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
    
      setAuthHeader(persistedToken);
      const res = await goitAPI.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
     
    }
  }
);
