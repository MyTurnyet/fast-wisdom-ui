import { StoryDataService } from '../StoryDataService';

describe('StoryDataService', () => {
	it('should do something', async () => {
		const dataService = new StoryDataService();
		const informationArray = await dataService.getAllStories();
		expect(informationArray).toHaveLength(2);
	});
});
