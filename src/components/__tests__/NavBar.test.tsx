import React from 'react';
import {
	expectHistoryCalledWith,
	hasExpectedElementsByText,
	pressButtonWithTitle,
	renderWithRouterAndStore,
} from '../../configuration/ReactTestToolkit';
import { NavBar } from '../NavBar';
import { RenderResult } from '@testing-library/react';
import { mockInitialStore } from '../../configuration/Store';

describe('NavBar', () => {
	let renderAPI: RenderResult;
	beforeEach(() => {
		renderAPI = renderWithRouterAndStore(<NavBar />, mockInitialStore);
	});

	function clickLink(linkName: string) {
		pressButtonWithTitle(renderAPI, linkName);
	}

	it('should render the correct text', () => {
		hasExpectedElementsByText(renderAPI, 'Home', 'About');
	});
	it('should render about link', () => {
		clickLink('About');
		expectHistoryCalledWith('/about');
	});
	it('should render home link', () => {
		clickLink('Home');
		expectHistoryCalledWith('/home');
	});
});
