import { storySlice, StoryState } from '../StorySlice';
import { getAllStories } from '../../thunks/getAllStories';
import { testStoryInformationArray } from '../../../configuration/fixtures/StoryFixtureData';

describe('StorySlice', () => {
    it('should handle getAlLStories.fulfilled', () => {
        const initialState: StoryState = {allStories: []};
        const actualState = storySlice.reducer(
            initialState,
            getAllStories.fulfilled(testStoryInformationArray, 'test', undefined),
        );
        expect(actualState).toEqual({
            allStories: testStoryInformationArray
        });
    });
});