import React from 'react';
import { render } from '@testing-library/react';
import { StoryLink } from '../StoryLink';
import { hasExpectedElementsByText } from '../../configuration/ReactTestToolkit';
import { testStoryNumber1 } from '../../configuration/fixtures/StoryFixtureData';

describe('StoryLink', () => {
    it('should show title, votes', () => {
        const view = render(<StoryLink story={testStoryNumber1}></StoryLink>)
        hasExpectedElementsByText(view, testStoryNumber1.title, `votes: ${testStoryNumber1.numberOfVotes}`,
            `average: ${testStoryNumber1.voteAverage}`);
    });
});