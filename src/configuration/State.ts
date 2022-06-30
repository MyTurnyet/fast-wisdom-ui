import { RootState } from '../state-management/store';
import { storySlice } from '../state-management/slices/StorySlice';

export const initialRootState: RootState = {stories: storySlice.getInitialState()};