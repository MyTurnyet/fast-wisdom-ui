import React from 'react';
import App from '../App';
import { hasExpectedElementsByText, renderWithRouter } from '../configuration/ReactTestToolkit';
import { RenderResult } from '@testing-library/react';

describe('App', () => {
    it('should render the app correctly', () => {
        const renderAPI: RenderResult = renderWithRouter(<App/>);
        hasExpectedElementsByText(renderAPI, 'Something')
    });
});
