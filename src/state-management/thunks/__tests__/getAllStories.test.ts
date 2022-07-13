import { FakeDataService } from '../../../configuration/FakeDataService';
import { createGetAllStories, getAllStories } from '../getAllStories';
import { mockInitialStore } from '../../../configuration/Store';
import { testStoryInformationArray } from '../../../configuration/fixtures/StoryFixtureData';

describe('getAllStories', () => {
	it('should return array of StoryInformation', async () => {
		const dataService = new FakeDataService();
		const getAlLStories = createGetAllStories(dataService);
		const returnedAction = await mockInitialStore.dispatch(getAlLStories());
		expect(returnedAction.payload).toEqual(testStoryInformationArray);
	});
});
