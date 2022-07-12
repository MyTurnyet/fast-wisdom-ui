import React from 'react';
import App from '../App';
import { hasExpectedElementsByText, renderWithRouterAndStore } from '../configuration/ReactTestToolkit';
import { RenderResult } from '@testing-library/react';
import { mockInitialStore } from '../configuration/Store';

describe('App', () => {
    it('should render the app correctly', () => {
        const view: RenderResult = renderWithRouterAndStore(<App/>, mockInitialStore);
        hasExpectedElementsByText(view, 'FAST \'Wisdom of the Crowds\'')
    });
});
