import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trelloApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.trello.com/1',
	}),
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		const key = getState().auth.key;

		// If we have a token and key set in state, let's assume that we should be passing it.
		if (token && key) {
			headers.set(
				'Authorization',
				`OAuth oauth_consumer_key=${key}, oauth_token=${token}`
			);
		}
	},
	endpoints: (builder) => ({
		getBoards: builder.query({
			query: () => `/members/me/boards`,
		}),
		getBoardList: builder.query({
			query: (id) => `/boards/${id}/lists`,
		}),
		getCardsOnBoardList: builder.query({
			query: (id) => ``,
		}),
	}),
});
