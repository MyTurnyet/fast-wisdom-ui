import React from 'react';
import { StoryLink } from '../StoryLink';
import { hasExpectedElementsByText, renderWithRouterAndStore } from '../../configuration/ReactTestToolkit';
import { testStoryNumber1 } from '../../configuration/fixtures/StoryFixtureData';
import { mockStoreWithOneStory } from '../../configuration/Store';

describe('StoryLink', () => {
    const view = renderWithRouterAndStore(<StoryLink story={testStoryNumber1}></StoryLink>, mockStoreWithOneStory);
    it('shows title, votes, and average', () => {
        hasExpectedElementsByText(view, testStoryNumber1.title, `votes: ${testStoryNumber1.numberOfVotes}`,
            `average: ${testStoryNumber1.voteAverage}`);
    });
});