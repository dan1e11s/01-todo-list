import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveFilters } from '../store/selectors/filter-selectors';
import { setFilter } from '../store/actions/filters-actions';

const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilters);

  return (
    <div>
      <button
        onClick={() => dispatch(setFilter('all'))}
        style={{ color: activeFilter === 'all' ? 'red' : 'black' }}
      >
        all
      </button>
      <button
        onClick={() => dispatch(setFilter('active'))}
        style={{ color: activeFilter === 'active' ? 'red' : 'black' }}
      >
        active
      </button>
      <button
        onClick={() => dispatch(setFilter('completed'))}
        style={{ color: activeFilter === 'completed' ? 'red' : 'black' }}
      >
        completed
      </button>
    </div>
  );
};

export default Filters;
