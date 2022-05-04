import { createContext, useReducer, useState, useEffect } from 'react';

let reducer = (data, newData) => {
	return { ...data, ...newData };
};

export const AuthContext = createContext();

const initialState = {
	key: '',
	token: '',
};

const localState = JSON.parse(localStorage.getItem('authData'));

export function AuthProvider({ children }) {
	const [authData, setAuthData] = useReducer(
		reducer,
		localState || initialState
	);

	const saveToken = (token) => {
		localStorage.setItem(
			'authData',
			JSON.stringify({
				...authData,
				token: token,
			})
		);
		setAuthData({ ...authData, token });
	};

	const saveKey = (key) => {
		localStorage.setItem(
			'authData',
			JSON.stringify({
				key: key,
				...authData,
			})
		);
	};

	let value = { authData, saveToken, saveKey };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
