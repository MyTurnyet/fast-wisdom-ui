import React from 'react';

import { MainPage } from '../MainPage';
import { render } from '@testing-library/react';
import { hasExpectedElementsByText } from '../../configuration/ReactTestToolkit';

describe('MainPage', () => {
	it('renders just the name', () => {
		const view = render(<MainPage></MainPage>);
		hasExpectedElementsByText(view, 'Main Page');
	});
});
