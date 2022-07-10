import { StoryInformation } from '../../services/StoryDataService';

export const testStoryNumber1: StoryInformation = {
    title: 'Title of Story 1',
    storyId: 'testId1',
    numberOfVotes: 1,
    voteAverage: 10
};
export const testStoryNumber2: StoryInformation = {
    title: 'Title of Story 2',
    storyId: 'testId2',
    numberOfVotes: 5,
    voteAverage: 152
};
export const testStoryInformationArray: StoryInformation[] = [
    testStoryNumber1,
    testStoryNumber2,
];