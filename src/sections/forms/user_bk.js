import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { Box, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// third-party
import { useTable, useFilters, useGlobalFilter, usePagination } from 'react-table';
import { GlobalFilter } from 'utils/react-table';

// project import
import MainCard from 'components/MainCard';
import ScrollX from 'components/ScrollX';
//import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';
import { TablePagination } from 'components/third-party/ReactTable';
import makeData from 'data/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, top }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // @ts-ignore
    page,
    prepareRow,
    state,
    // @ts-ignore
    gotoPage,
    preGlobalFilteredRows,
    // @ts-ignore
    setPageSize,
    setGlobalFilter,
    // @ts-ignore
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
      initialState: { pageIndex: 0, pageSize: 10 }
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  return (
    <Stack spacing={2}>
      <Box sx={{ p: 2, pb: 0, textAlign: 'right' }}>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          // @ts-ignore
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </Box>
      {top && (
        <Box sx={{ p: 2, pb: 0 }}>
          <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
        </Box>
      )}
      <Table {...getTableProps()}>
        <TableHead sx={{ borderTopWidth: top ? 2 : 1 }}>
          {headerGroups.map((headerGroup, index) => (
            <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <TableCell key={i} {...column.getHeaderProps([{ className: column.className }])}>
                  {column.render('Header')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow key={i} {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <TableCell key={index} {...cell.getCellProps([{ className: cell.column.className }])}>
                    {cell.render('Cell')}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}

          {!top && (
            <TableRow>
              <TableCell sx={{ p: 2 }} colSpan={9}>
                <TablePagination gotoPage={gotoPage} rows={rows} setPageSize={setPageSize} pageIndex={pageIndex} pageSize={pageSize} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  top: PropTypes.bool
};

// ==============================|| REACT TABLE - PAGINATION ||============================== //

const UserProfile = () => {
  const data = useMemo(() => makeData(2000), []);
  const columns = useMemo(
    () => [
      {
        Header: 'No',
        accessor: 'no'
      },
      {
        Header: 'UserID',
        accessor: 'userid',
        className: 'cell-left'
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Age',
        accessor: 'age',
        className: 'cell-right'
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        className: 'cell-right'
      },
      {
        Header: 'Status',
        accessor: 'status',
        // eslint-disable-next-line
        Cell: ({ value }) => {
          switch (value) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      }
    ],
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="គ្រប់គ្រងអ្នកប្រើប្រព័ន្ធ" content={false}>
          <ScrollX>
            <ReactTable columns={columns} data={data} />
          </ScrollX>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
