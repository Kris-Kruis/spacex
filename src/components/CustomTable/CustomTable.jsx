import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import './CustomTable.css';
import GlobalTableFilter from '../GlobalTableFilter';
import Pagination from '../Pagination';

function getTableColumns (row = {}) {
  const { id, __typename, ...otherParameters } = row;
  
  return Object.keys(otherParameters).map(key => ({
    Header: key.replace(/[_]/g, ' '),
    accessor: key,
  }));
}

function getTableRows (rows = []) {
  return rows.map(row => {
    const { __typename, ...otherParameters } = row;
    return { ...otherParameters };
  });
}

function generateThead (headerGroups) {
  if (!headerGroups || !headerGroups.length) return null;

  return (
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => {
            const sortIcon = column.isSortedDesc
              ? <>&darr;</>
              : <>&uarr;</>;
            return (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
              <span>{column.render('Header')}</span>
              {column.isSorted &&
                <span>{sortIcon}</span>
              }
            </th>
          )})}
        </tr>
      ))}
    </thead>
  );
}

function generateTbody (getTableBodyProps, page, prepareRow, selectedRow, setSelectedRow, onDoubleClickTableItem) {
  if (
    typeof getTableBodyProps !== 'function'
    || typeof prepareRow !== 'function'
    || typeof setSelectedRow !== 'function'
    || typeof onDoubleClickTableItem !== 'function'
    || !page
  ) {
    return null;
  }

  return (
    <tbody {...getTableBodyProps()}>
      {page.map(row => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className={(selectedRow === row.id) ? 'selected' : ''}
            onClick={(e) => {
              if (selectedRow !== row.original.id) {
                setSelectedRow(row.original.id);
              }
            }}
            onDoubleClick={() => {
              onDoubleClickTableItem(row.original.id);
            }}
          >
            {row.cells.map(cell => {
              return (
                <td {...cell.getCellProps()}>
                  {cell.value ? cell.render('Cell') : '-'}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

function CustomTable ({ data, onDoubleClickTableItem }) {
  const tableData = useMemo(() => getTableRows(data), [data]);
  const columns = useMemo(() => getTableColumns(data[0]), [data]);
  const [selectedRow, setSelectedRow] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data: tableData,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  return (
    <div className="custom-table">
      <div className="search">
        <GlobalTableFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className="table-wrap">
        { (data.length) ?
            <table {...getTableProps()}>
              {generateThead(headerGroups)}
              {generateTbody(getTableBodyProps, page, prepareRow, selectedRow, setSelectedRow, onDoubleClickTableItem)}
            </table>
          : <div className="table-loading">
              <Loader
                type="Rings"
                color="#00BFFF"
                height={100}
                width={100}
              />
            </div>
        }
      </div>

      <Pagination
        pageSize={pageSize}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        numberOfPages={pageOptions.length}
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount} />
    </div>
  );
}

CustomTable.propTypes = {
  data: PropTypes.array,
  onDoubleClickTableItem: PropTypes.func,
};

CustomTable.defaultProps = {
  data: [],
  onDoubleClickTableItem: () => null,
};

export default CustomTable;
