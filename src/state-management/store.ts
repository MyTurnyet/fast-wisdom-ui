import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './index';

export const store = configureStore({
	reducer: appReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: { warnAfter: 128 },
			serializableCheck: { warnAfter: 128 },
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
