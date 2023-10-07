import { setFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
