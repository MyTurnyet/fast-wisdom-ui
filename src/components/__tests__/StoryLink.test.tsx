import React from 'react';
import { StoryLink } from '../StoryLink';
import {
	expectHistoryCalledWith,
	hasExpectedElementsByText,
	pressButtonWithTitle,
	renderWithRouterAndStore,
} from '../../configuration/ReactTestToolkit';
import { testStoryNumber1 } from '../../configuration/fixtures/StoryFixtureData';
import { mockStoreWithOneStory } from '../../configuration/Store';

describe('StoryLink', () => {
	it"shows title, votes, and average"', () => {
		const view = renderWithRouterAndStore(
			<StoryLink story={testStoryNumber1}></StoryLink>,
			mockStoreWithOneStor,
		);
		hasExpectedElementsByText(
			view,
			testStoryNumber1.title,
			`votes: ${testStoryNumber1.numberOfVotes}`,
			`average: ${testStoryNumber1.voteAverage},
		);
	});
	it"navigates to clicked story"', () => {
		const view = renderWithRouterAndStore(
			<StoryLink story={testStoryNumber1}></StoryLink>,
			mockStoreWithOneStor,
		);
		pressButtonWithTitle(view, testStoryNumber1.title);
		expectHistoryCalledWith(`/story/${testStoryNumber1.storyId}`);
	});
});
