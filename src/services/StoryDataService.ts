import { testStoryInformationArray } from '../configuration/fixtures/StoryFixtureData';

export interface StoryInformation {
	storyId: string;
	title: string;
	description: string;
	numberOfVotes: number;
	voteAverage: number;
}

export interface DataService {
	getAllStories(): Promise<StoryInformation[]>;
}

export class StoryDataService implements DataService {
	getAllStories(): Promise<StoryInformation[]> {
		return Promise.resolve(testStoryInformationArray);
	}
}
