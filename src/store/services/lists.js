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

		addBoardToList: builder.mutation({
			query: ({ id, board }) => ({
				document: gql`
					mutation addBoardToList($id: ID!, $board: BoardInput!) {
						addBoardToList(id: $id, board: $board) {
							boardId
							name
							link
						}
					}
				`,
				variables: {
					id,
					board,
				},
			}),
		}),

		removeBoardFromList: builder.mutation({
			query: ({ id, boardId }) => ({
				document: gql`
					mutation removeBoardFromList($id: ID!, $boardId: String!) {
						removeBoardFromList(id: $id, boardId: $boardId) {
							boardId
							name
							link
						}
					}
				`,
				variables: {
					id,
					boardId,
				},
			}),
		}),

		moveBoardToList: builder.mutation({
			query: ({ oldId, newId, boardId }) => ({
				document: gql`
					mutation moveBoardToList(
						$oldId: ID!
						$newId: ID!
						$boardId: String!
					) {
						moveBoardToList(oldId: $oldId, newId: $newId, boardId: $boardId) {
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
					oldId,
					newId,
					boardId,
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
