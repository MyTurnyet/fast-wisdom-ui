import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllStories } from '../thunks/getAllStories';
import { StoryInformation } from '../../services/StoryDataService';

export interface StoryState {
    allStories: StoryInformation[];
}

let initialState: StoryState = {allStories: []};
export const storySlice = createSlice({
    name: 'Story',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAllStories.fulfilled,
            (state, {payload}: PayloadAction<StoryInformation[]>) => {
                state.allStories = payload;
            })
    }
})