import { hasExpectedElementsByText, renderWithRouterAndStore, } from '../../../configuration/ReactTestToolkit';
import { StoryDisplay } from '../StoryDisplay';
import { testStoryNumber1 } from '../../../configuration/fixtures/StoryFixtureData';
import { mockStoreWithOneStory } from '../../../configuration/Store';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useParams: () => ({
        storyId: 'testId1',
    }),
}));
describe('StoryDisplay', () => {
    it('has required fields', () => {
        const view = renderWithRouterAndStore(<StoryDisplay/>, mockStoreWithOneStory);
        hasExpectedElementsByText(view, testStoryNumber1.title);
    });
});