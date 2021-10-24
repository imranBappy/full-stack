/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import useQuery from '../../utils/useQuery';

import './table.css';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function InfoTable(props) {
    const classes = useStyles();
    const { columns } = props;
    const myLocation = useLocation()
    let query = useQuery(useLocation);
    const history = useHistory()
    let { gameId } = useParams()
    const [page, setPage] = useState(Number(query.get('page')));
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        history.push(`${props.path}?page=${newPage}`);
        changePage(newPage);
    };
    const changePage = (p) =>{
        props.action(p, myLocation.pathname.split('/')[1]);
    };
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
                {props.rows.map( (row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      {columns.map((column) => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              column.id === 'user' && props.path === '/bet' ? value ? value.length : 0 :
                              column.id === 'club' ? value.clubId ? value.clubId: 'null' :
                              column.id === 'user' && props.path === '/club' ? value.length :
                              column.id === 'user' ? value.username :
                              column.id === 'createdAt' ? new Date(value).toLocaleString() :
                              column.id === 'UsersUsername' ? row.user.username :
                              (column.id === 'status' && props.path === '/bet') ||(column.id === 'status' && props.path === '/deposit') ||(column.id === 'status' && props.path === '/withdraw')?
                              value === 'Pending'?
                              <>
                                <Button 
                                  style={{ width: 100,marginRight:5 }}
                                  color={"primary"} 
                                  onClick={()=>props.acceptHandler({...row, status: 'Accepted'}, i, props.rows, props.length, row.status, props.bet, props.index ,props.bets, props.path )}
                                  variant={"outlined"}>
                                    {
                                      props.path === '/bet' ? value === 'Pending' ? 'Win' :'Wined' :  
                                      value === 'Pending' ? 'Accept' :'Accepted'
                                    }
                                </Button> 
                                <Button 
                                  style={{ width: 100 }}
                                  color={'secondary'} 
                                  onClick={()=>props.acceptHandler({...row, status: 'Rejected'}, i, props.rows,props.length, row.status, props.bet, props.index ,props.bets, props.path)}
                                  variant={'outlined'}>
                                    {
                                      props.path === '/bet' ? value === 'Pending' ? 'Loss' :'Lossed' :  
                                      value === 'Pending' ? 'Reject' :'Rejected'
                                    }
                                </Button> 
                              </>
                            :<Button 
                              style={{ width: 100 }}
                              color={value=== 'Accepted' || value=== 'Win'? 'primary' :'secondary'} 
                              onClick={()=>props.acceptHandler(row, null, null,null , row.status)}
                              variant={'contained'}>
                                {props.path==='/bet' ? value === 'Win' ? 'Wined': 'Lossed'
                                : value=== 'Accepted' ? 'Accepted' :'Rejected'}
                            </Button> 
                            :
                            column.id === 'isActive' ? 
                            <Button 
                              style={{ width: 78 }}
                              onClick={()=>props.gameActionAction(row, i, props.rows,props.length)}
                              color={value ? 'primary' :"secondary"} 
                              variant="outlined" >
                                {value ? 'Show' : 'Hide'}
                            </Button>:
                            column.id === 'status' && props.path=== '/game' ?
                            <Button 
                              style={{ width: 110 }}
                              onClick={()=>props.gameStatusAction(row, i, props.rows,props.length)}
                              color={value === 'Upcoming' ? 'primary' :"secondary"} 
                              variant="outlined" >
                                {value}
                              </Button>
                            :column.id === 'active' && props.path === '/user' ? 
                              <Button
                                style={{ width: 100 }}
                                onClick={()=>props.userAction({...row , active: !row.active}, i, props.rows,props.length)}
                                color={value ? 'primary' :"secondary"} 
                                variant="outlined" >
                                  {value? 'Active': 'Inactive'}
                              </Button>
                            :column.id === 'show' && props.path === '/bet' ? 
                            <Button
                                onClick={()=>props.resultShowAction(
                                  {...row, show: !row.show},
                                  i, props.bet, props.index, props.bets,
                                  )}
                                style={{ width: 100 }}
                                color={value ? 'primary' :"secondary"} 
                                variant="outlined" >
                                  {value? 'Active': 'Inactive'}
                              </Button>
                            :column.id === 'action' && props.path === '/add-admin' ? 
                            <Button
                            onClick={()=>{props.adminDeleteAction(row)}}
                                style={{ width: 100 }}
                                color={"secondary"} 
                                variant="outlined" >
                                  Delete
                              </Button>:
                              column.id === 'isAdmin' && props.path === '/add-admin' ? 
                              <Button
                                  onClick={()=>props.adminEditAction(row)}
                                  style={{ width: 100 }}
                                  color={"primary"} 
                                  variant="outlined" >
                                    {value? 'Admin': 'Editor'}
                                </Button>:
                            // 
                              column.id === 'sName'? value? value.username :'null' :
                              column.id === 'game' ? `${value.country1} VS ${value.country2}- ${value.name}`:
                              column.id === 'bet' ? value.title:
                              column.id === 'result' ? value.question:
                              column.id === 'rate' && props.path === '/bet-list'? row.rate:
                              column.id === 'status' && props.path === '/bet-list'? row.result.status
                            : value
                            }
                            {column.id === 'option' && <Link to={props.path === '/bet' ? `/bet-add/${gameId}?resultId=${row._id}&betId=${props._id}` :`/bet/${row._id}`} ><Button variant='outlined' >Option</Button></Link> }
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

export default InfoTable ;