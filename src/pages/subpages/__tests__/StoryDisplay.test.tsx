import { hasExpectedElementsByText, renderWithRouterAndStore } from '../../../configuration/ReactTestToolkit';
import { StoryDisplay } from '../StoryDisplay';
import { mockStoreWithOneStory } from '../../../configuration/Store';

describe('StoryDisplay', () => {
    it('has required fields', () => {
        const view = renderWithRouterAndStore(<StoryDisplay/>, mockStoreWithOneStory);
        hasExpectedElementsByText(view, 'Story Display');
    });
});