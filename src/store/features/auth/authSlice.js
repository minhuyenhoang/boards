import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		key: localStorage.getItem('key'),
		token: '',
		expirationTime: 0,
	},

	reducers: {
		saveKey: (state, action) => {
			state.key = action.payload;
		},
		saveToken: (state, action) => {
			state.token = action.payload.token;
			state.expirationTime = action.payload.expirationTime;
		},
		deleteAuthData: (state) => {
			state.key = '';
			state.token = '';
		},
	},
});

export const { saveKey, saveToken, deleteAuthData } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
