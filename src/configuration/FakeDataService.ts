import { DataService, StoryInformation } from '../services/StoryDataService';
import { testStoryInformationArray } from './fixtures/StoryFixtureData';

export class FakeDataService implements DataService {
	getAllStories(): Promise<StoryInformation[]> {
		return Promise.resolve(testStoryInformationArray);
	}
}
