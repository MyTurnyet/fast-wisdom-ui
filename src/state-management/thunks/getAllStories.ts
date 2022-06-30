import { StoryDataService } from '../../services/StoryDataService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createGetAllStories = (service: StoryDataService) => {
    return createAsyncThunk()
}