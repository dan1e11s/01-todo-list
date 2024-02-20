import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers/index';
import { loadState, saveState } from '../local-storage';

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  devToolsEnhancer()
);

store.subscribe(() => {
  saveState({ todos: store.getState().todos });
});
