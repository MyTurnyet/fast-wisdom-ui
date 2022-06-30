import { StoryDataService, StoryInformation } from '../../services/StoryDataService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ThunkStoreApi {
    state: RootState;
}

export const createGetAllStories = (service: StoryDataService) => {
    return createAsyncThunk<StoryInformation[], void, ThunkStoreApi>(
        'data/allStories',
        async () => {
            return await service.getAllStories();
        }
    )
}

export const getAllStories = createGetAllStories(new StoryDataService());