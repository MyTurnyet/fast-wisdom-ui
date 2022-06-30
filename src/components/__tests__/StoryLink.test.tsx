import React from 'react';
import { render } from '@testing-library/react';
import { StoryLink } from '../StoryLink';
import { hasExpectedElementsByText } from '../../configuration/ReactTestToolkit';

describe('StoryLink', () => {
    it('should render', () => {
        const renderApi = render(<StoryLink></StoryLink>)
        hasExpectedElementsByText(renderApi, 'StoryLink');
    });
});