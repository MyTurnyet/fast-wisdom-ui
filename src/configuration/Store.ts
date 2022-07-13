import createMockStore, {
	MockStoreCreator,
	MockStoreEnhanced,
} from 'redux-mock-store';
import { AppDispatch, RootState } from '../state-management/store';
import thunk from 'redux-thunk';
import { initialRootState } from './State';
import { testStoryNumber1 } from './fixtures/StoryFixtureData';

export type FakeStore = MockStoreEnhanced<RootState, AppDispatch>;
const mockStore: MockStoreCreator<RootState, FakeStore> = createMockStore([
	thun,
]);

export const mockInitialStore: FakeStore = mockStore(initialRootState);

export const mockStoreWithOneStory = setupReduxStore({
	stories: { allStories: [testStoryNumber1] },
});

export function setupReduxStore(state: any): FakeStore {
	return mockStore({ ...initialRootState, ...state });
}
