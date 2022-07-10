import React from 'react';
import { AppLayout } from '../AppLayout';
import { hasExpectedElementsByText, renderWithRouterAndStore } from '../../configuration/ReactTestToolkit';

describe('App Layout', () => {
    describe('renders stories in left nav', () => {

        it('should exist', () => {
            const view = renderWithRouterAndStore(<AppLayout/>)
            hasExpectedElementsByText(view, 'left nav')
        });
    });
});