import createMockStore, { MockStoreCreator, MockStoreEnhanced } from 'redux-mock-store';
import { AppDispatch, RootState } from '../state-management/store';
import thunk from 'redux-thunk';
import { initialRootState } from './State';

export type FakeStore = MockStoreEnhanced<RootState, AppDispatch>;
const mockStore: MockStoreCreator<RootState, FakeStore> = createMockStore([
    thunk,
]);

export const mockInitialStore: FakeStore = mockStore(initialRootState);

export function setupReduxStore(state: any): FakeStore {
    return mockStore({...initialRootState, ...state});
}