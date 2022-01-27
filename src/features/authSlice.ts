// no param reassing is put to enable reassigning state in reducer
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginResult, LoginArguments, LoginState } from '../types/auth';
import { baseUrl, STATUS, GENERIC_ERROR_MESSAGE, EMPTY_USER } from '../config/app/constants';

const initialState: LoginState = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user') || 'null') || EMPTY_USER,
  status: 'idle',
  error: null,
};

export const login = createAsyncThunk<
  LoginResult,
  LoginArguments,
  {
    rejectValue: string;
  }
>('auth/login', async (userInfo, { rejectWithValue }) => {
  let response;
  try {
    response = await axios.post<LoginResult>(`${baseUrl}/rest-auth/login/`, userInfo);
    return response.data;
  } catch (error) {
    let err;
    if (axios.isAxiosError(error)) {
      const [errorArray] = Object.values(error?.response?.data) as Array<string>;
      const [firstError] = errorArray;
      err = firstError as string;
    }

    return rejectWithValue(err || GENERIC_ERROR_MESSAGE);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.user = EMPTY_USER;
      state.token = '';
      state.error = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.pending, (state) => {
      state.status = STATUS.loading;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.status = STATUS.success;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    });

    builder.addCase(login.rejected, (state, action) => {
      state.status = STATUS.error;
      state.error = action.payload ? action.payload : null;
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
