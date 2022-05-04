import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import listsReducer from './features/lists/listsSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		lists: listsReducer,
	},
});
