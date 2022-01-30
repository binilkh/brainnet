import { createSelector } from 'reselect';

const toDoError = (state) => state.error;
const searchData = (state) => state.searchData;

export const makeSelectToDoError = () => createSelector(
  toDoError,
  (toDoStateError) => {
	return toDoStateError;
  }
);
export const makeSelectSearchData = () => createSelector(
  searchData,
  (search) => {
	return search;
  }
);