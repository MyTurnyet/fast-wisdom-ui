import React from 'react';
import { AppLayout } from '../AppLayout';
import {
	hasExpectedElementsByText,
	renderWithRouterAndStore,
} from '../../configuration/ReactTestToolkit';
import { mockStoreWithOneStory } from '../../configuration/Store';

describe('App Layout', () => {
	it('has Story 1 title in left nav', () => {
		const view = renderWithRouterAndStore(<AppLayout />, mockStoreWithOneStory);
		hasExpectedElementsByText(view, 'Title of Story 1');
	});
});
