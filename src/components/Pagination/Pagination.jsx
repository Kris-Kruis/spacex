import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

function Pagination ({
  pageSize,
  setPageSize,
  pageIndex,
  numberOfPages,
  gotoPage,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount,
}) {
  return (
    <div className="pagination">
      <div className="pagination__content">
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>

        <span>
          Page {numberOfPages ? pageIndex + 1 : 0} of {numberOfPages}
        </span>

        <div>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
  pageIndex: PropTypes.number,
  numberOfPages: PropTypes.number,
  gotoPage: PropTypes.func,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  pageCount: PropTypes.number,
};

Pagination.defaultProps = {
  pageSize: 0,
  setPageSize: () => null,
  pageIndex: 0,
  numberOfPages: 0,
  gotoPage: () => null,
  previousPage: () => null,
  nextPage: () => null,
  canPreviousPage: false,
  canNextPage: false,
  pageCount: 0,
};

export default Pagination;
