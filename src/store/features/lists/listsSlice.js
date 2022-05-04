import { createSlice } from '@reduxjs/toolkit';

export const listsSlice = createSlice({
	name: 'lists',
	initialState: {},

	reducers: {
		addList: (state, action) => {
			const { id, title, boards } = action.payload;
			state = { ...state, [id]: { id: id, title: title, boards: boards } };
		},
		deleteList: (state, action) => {
			const { [action.payload]: removedList, ...restOfList } = state;
			state = restOfList;
		},

		rename: (state, action) => {
			const { id, newTitle } = action.payload;
			state = { ...state, [id]: { ...state[id], title: newTitle } };
		},

		removeBoard: (state, action) => {
			const { id, boardId } = action.payload;
			const filtered = state[id].boards.filter((board) => board !== boardId);
			state[id].boards = filtered;
		},

		addBoard: (state, action) => {
			const { id, boardId } = action.payload;
			state = {
				...state,
				[id]: { ...state[id], boards: [...state[id].boards], boardId },
			};
		},

		moveBoard: (state, action) => {
			const { oldList, newList, boardId } = action.payload;
			const filtered = state[oldList].boards.filter(
				(board) => board !== boardId
			);
			state[oldList].boards = filtered;
			state = {
				...state,
				[newList]: {
					...state[newList],
					boards: [...state[newList].boards],
					boardId,
				},
			};
		},
	},
});

export const { addList, deleteList, rename, addBoard, removeBoard, moveBoard } =
	listsSlice.actions;
export const selectLists = (state) => state.lists;
export default listsSlice.reducer;
