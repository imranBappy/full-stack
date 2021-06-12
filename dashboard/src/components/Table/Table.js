/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './table.css';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function User(props) {
    const classes = useStyles();
    const { columns } = props;
    let query = useQuery();
    const history = useHistory()

    const [page, setPage] = useState(Number(query.get('page')));
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        history.push(`${props.path}?page=${newPage}`);
        changePage(newPage);
    };
    const changePage = (p) =>{
        props.action(p);
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(()=>{
        changePage(page);
    }, []);
    
  return (
      <>
      {props.btnName&& <Link style={{ textDecoration: 'none' }} to={props.btnPath}>
                <Button variant='outlined' color='primary' >
                  {props.btnName}
                </Button>
            </Link>
      }
      {props.length?  
        <Paper id='ces_res' className={`${classes.root} wow`}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map( row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>

                            {column.id === 'sName'? value.username : column.format && typeof value === 'number' ? column.format(value) : value}
                            {column.id === 'option' && <Link to={`/bet/${row._id}`} ><Button variant='outlined' >Option</Button></Link> }

                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={props.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        :
        <h1 style={{textAlign:'center'}} >Data Not Found</h1>
      }
      </>
  );
}

export default User ;