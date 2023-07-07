import { initialState } from './formSlice';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('form');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: typeof initialState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('form', serializedState);
  } catch (err) {
    console.error(err);
  }
};
