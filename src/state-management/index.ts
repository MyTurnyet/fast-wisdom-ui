import { combineReducers } from '@reduxjs/toolkit';
import { storySlice } from './slices/StorySlice';

export const appReducer = combineReducers({
    stories: storySlice.reducer
});