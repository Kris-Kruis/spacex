import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import PropTypes from 'prop-types';

import './GlobalTableFilter.css';

function GlobalTableFilter ({
  globalFilter,
  setGlobalFilter,
}) {
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value);
  }, 200);

  return (
    <input className="global-table-filter"
      value={value || ''}
      onChange={($event) => {
        setValue($event.target.value);
        onChange($event.target.value);
      }}
      placeholder="Search..."
    />
  )
}

GlobalTableFilter.propTypes = {
  globalFilter: PropTypes.string,
  setGlobalFilter: PropTypes.func,
};

GlobalTableFilter.defaultProps = {
  globalFilter: null,
  setGlobalFilter: () => null,
};

export default GlobalTableFilter;
