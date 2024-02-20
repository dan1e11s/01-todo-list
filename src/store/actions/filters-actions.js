import { SET_FILTER } from '../constants/filters-consts';

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
