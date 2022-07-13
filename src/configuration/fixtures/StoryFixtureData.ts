import { StoryInformation } from "../../services/StoryDataService";

export const testStoryNumber1: StoryInformation = {
	storyId: 'testId1',
	title: 'Title of Story 1',
	description:
		'This is story one, its not a huge story.  actually, its a rather normal sized story, but theres a lot of new technology',
	numberOfVotes: 1,
	voteAverage: 10,
};
export const testStoryNumber2: StoryInformation = {
	storyId: 'testId2',
	title: 'Title of Story 2',
	description:
		'Change the background color of the site, but only when a user is logged in',
	numberOfVotes: 5,
	voteAverage: 15,
};
export const testStoryInformationArray: StoryInformation[] = [
	testStoryNumber1,
	testStoryNumber2
];
