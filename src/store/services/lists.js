import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export const listApi = createApi({
	baseQuery: graphqlRequestBaseQuery({
		url: '/graphql',
	}),
	endpoints: (builder) => ({
		getLists: builder.query({
			query: (username) => ({
				document: gql`
					query getLists($username: String!) {
						getLists(username: $username) {
							_id
							username
							fullname
							title
							boards {
								boardId
								name
								link
							}
						}
					}
				`,
				variables: {
					username,
				},
			}),
		}),

		createList: builder.mutation({
			query: ({ username, fullname, title }) => ({
				document: gql`
					mutation createList(
						$username: String!
						$fullname: String!
						$title: String!
					) {
						createList(
							username: $username
							fullname: $fullname
							title: $title
						) {
							_id
							username
							fullname
							boards {
								boardId
								name
								link
							}
						}
					}
				`,
				variables: {
					username,
					fullname,
					title,
				},
			}),
		}),

		renameList: builder.mutation({
			query: ({ id, newTitle }) => ({
				document: gql`
					mutation renameList($id: ID!, $newTitle: String!) {
						title
					}
				`,
				variables: {
					id,
					newTitle,
				},
			}),
		}),

		deleteList: builder.mutation({
			query: ({ id }) => ({
				document: gql`
					mutation deleteList($id: ID!) {
						deleteList(id: $id) {
							_id
							username
							fullname
							title
							boards {
								boardId
								name
								link
							}
						}
					}
				`,
				variables: {
					id,
				},
			}),
		}),

		addCardToList: builder.mutation({
			query: ({ id, card }) => ({
				document: gql`
					mutation addBoardToList($id: ID!, $card: CardInput!) {
						addCardToList(id: $id, card: $card) {
							cardId
							name
							link
						}
					}
				`,
				variables: {
					id,
					card,
				},
			}),
		}),

		removeCardFromList: builder.mutation({
			query: ({ id, cardId }) => ({
				document: gql`
					mutation removeBoardFromList($id: ID!, $cardId: String!) {
						removeBoardFromList(id: $id, cardId: $cardId) {
							cardId
							name
							link
						}
					}
				`,
				variables: {
					id,
					cardId,
				},
			}),
		}),

		moveCardToList: builder.mutation({
			query: ({ oldId, newId, cardId }) => ({
				document: gql`
					mutation moveBoardToList(
						$oldId: ID!
						$newId: ID!
						$cardId: String!
					) {
						moveBoardToList(oldId: $oldId, newId: $newId, cardId: $cardId) {
							_id
							username
							fullname
							title
							cards {
								cardId
								name
								link
							}
						}
					}
				`,
				variables: {
					oldId,
					newId,
					cardId,
				},
			}),
		}),
	}),
});

export const {
	getLists,
	createList,
	renameList,
	deleteList,
	addBoardToList,
	removeBoardFromList,
	moveBoardToList,
} = listApi;
