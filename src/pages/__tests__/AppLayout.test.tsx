import React from 'react';
import { AppLayout } from '../AppLayout';
import { hasExpectedElementsByText, renderWithRouterAndStore } from '../../configuration/ReactTestToolkit';
import { mockInitialStore, mockStoreWithOneStory } from '../../configuration/Store';

describe('App Layout', () => {
    xit('has Main Page', () => {
        const view = renderWithRouterAndStore(<AppLayout/>, mockInitialStore);
        hasExpectedElementsByText(view, 'Main Page');
    });
    it('has Story 1 title in left nav', () => {
        const view = renderWithRouterAndStore(<AppLayout/>, mockStoreWithOneStory);
        hasExpectedElementsByText(view, 'Title of Story 1');
    });
});