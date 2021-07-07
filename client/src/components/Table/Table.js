/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import  './Table.css';
import useQuery from '../../utils/useQuery';
import { useLocation, useHistory} from 'react-router-dom';
const Table = ({columns, rows, action, path}) => {
    console.log({columns, rows});
    const query = useQuery(useLocation);
    const history = useHistory()
    const [page, setPage] = useState(0);
    useEffect(()=>{
        if (query.get('page'))setPage(Number(query.get('page')));
    },[])
    const handlePage = (type) =>{
        console.log(type);
        if (type==='next') {
            setPage(Number(page) + 1);
            history.push(`/statement/bet?page=${Number(page) + 1}`);
            action(Number(page) + 1)
        }else{
            if (page){
                setPage(Number(page) - 1)
                history.push(`/statement/bet?page=${Number(page) - 1}`);
                action(Number(page) - 1)
            }
        }
    };
    return (
        <>
            <div className="table">
                <table>
                    <tr>
                        {
                            columns.map(column =>(
                                <th 
                                style={{minWidth:column.minWidth}} 
                                >{column.label}</th>
                            ))
                        }
                    </tr>
                    {
                        rows.map((row) =>{
                            return (
                                <tr>
                                    {
                                        columns.map(column =>{
                                            const value = row[column.id]
                                            return (<td>{
                                                column.id === 'createdAt' ? new Date(value).toLocaleString():
                                                column.id === 'game' ? value.name :
                                                column.id === 'bet' ? value.title :
                                                column.id === 'result' ? value.question :
                                                column.id === 'rate' ? row.result.rate :
                                                column.id === 'status' && path ==='/bet' ? row.result.status  :
                                                value
                                                }</td>)
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colspan={columns.length} className="pagination-td">
                        <div className='pagination'>
                    <div>
                        <p className='page'>{page+1}-5 of 9</p>
                    </div>
                    <div>
                        <button 
                        disabled={page? false: true }
                        onClick={()=>handlePage('previous')}
                        className="previous">Previous</button>
                     </div>
                        <div>
                            <button 
                            onClick={()=>handlePage('next')}
                            className="next">Next</button>
                        </div>  
                        </div>
                    </td>
                   
                    </tr>
                </table>
               
            </div>
        </>
    );
};

export default Table;