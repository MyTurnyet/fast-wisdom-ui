import { DataService, StoryInformation } from '../services/StoryDataService';

export class FakeDataService implements DataService {
    getAllStories(): Promise<StoryInformation[]> {
        return Promise.resolve([])
    }
}