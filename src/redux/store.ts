import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  preloadedState: { form: persistedState },
});

store.subscribe(() => {
  saveState(store.getState().form);
});

export default store;
