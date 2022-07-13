import React from 'react';
import { renderWithRouterAndStore } from '../../../configuration/ReactTestToolkit';
import { StoryDisplay } from '../StoryDisplay';
import { testStoryNumber1 } from '../../../configuration/fixtures/StoryFixtureData';
import { mockStoreWithOneStory } from '../../../configuration/Store';
import { screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
	useParams: () => ({
		storyId: 'testId1',
	}),
}));
describe('StoryDisplay', () => {
	it('has title of story', () => {
		renderWithRouterAndStore(<StoryDisplay />, mockStoreWithOneStory);
		const title = screen.getByTitle('title');
		expect(title.textContent).toEqual(testStoryNumber1.title);
	});
	it('has description of story', () => {
		renderWithRouterAndStore(<StoryDisplay />, mockStoreWithOneStory);
		const description = screen.getByTitle('description');
		expect(description.textContent).toEqual(testStoryNumber1.description);
	});
	it('has number of Votes of story', () => {
		renderWithRouterAndStore(<StoryDisplay />, mockStoreWithOneStory);
		const voteCount = screen.getByTitle('voteCount');
		expect(voteCount.textContent).toEqual(
			testStoryNumber1.numberOfVotes.toString(),
		);
	});
	it('has average vote of story', () => {
		renderWithRouterAndStore(<StoryDisplay />, mockStoreWithOneStory);
		const voteCount = screen.getByTitle('voteAverage');
		expect(voteCount.textContent).toEqual(
			testStoryNumber1.voteAverage.toString(),
		);
	});
});
