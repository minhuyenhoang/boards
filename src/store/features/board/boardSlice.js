import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchBoardListById = createAsyncThunk('/board/getLists', (boardId) => {
	fetch(`https://api.trello.com/1/boards/${boardId}/lists`).then((res) =>
		res.json()
	);
});

export const boardSlice = createSlice({
	name: 'boards',
	initialState: {},

	reducers: {
		addBoard: (state, action) => {
			const { id, title, cards } = action.payload;
			state = {
				...state,
				[id]: {
					id: id,
					title: title,
					cards: cards,
				},
			};
		},

		removeBoard: (state, action) => {
			const { [action.payload]: removedBoard, ...restOfBoard } = state;
			state = restOfBoard;
		},

		addCard: (state, action) => {
			const { boardId, id } = action.payload;
			state = {
				...state,
				[boardId]: { ...state[boardId], cards: [...state[boardId].cards, id] },
			};
		},

		deleteCard: (state, action) => {
			const { id, cardId } = action.payload;
			const filtered = state[id].cards.filter((card) => card !== cardId);
			state[id].cards = filtered;
		},

		moveCard: (state, action) => {
			const { oldBoard, newBoard, cardId } = action.payload;
			const filtered = state[oldBoard].cards.filter((card) => card !== cardId);
			state[oldBoard].cards = filtered;
			state = {
				...state,
				[newBoard]: {
					...state[newBoard],
					cards: [...state[newBoard].cards, cardId],
				},
			};
		},
	},

	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchBoardListById.fulfilled, (state, action) => {
			// Add user to the state array
			state.entities.push(action.payload);
		});
	},
});

export const { addBoard, removeBoard, addCard, deleteCard, moveCard } =
	boardSlice.actions;

export const selectBoards = (state) => state.boards;
export default boardSlice.reducer;
