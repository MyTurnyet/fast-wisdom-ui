import React from 'react';
import { AppLayout } from '../AppLayout';
import { hasExpectedElementsByText, renderWithRouterAndStore } from '../../configuration/ReactTestToolkit';
import { mockStoreWithOneStory } from '../../configuration/Store';

describe('App Layout', () => {
    describe('renders stories in left nav', () => {
        it('with story title', () => {
            const view = renderWithRouterAndStore(<AppLayout/>, mockStoreWithOneStory);
            hasExpectedElementsByText(view, 'Title of Story 1');
        });
    });
});