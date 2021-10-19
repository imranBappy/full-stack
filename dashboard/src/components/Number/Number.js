import React, { useState,useEffect } from 'react';
import  axios  from 'axios';
import store from './../../store/store';
const Number = () => {
    const [number, setNumber] = useState({ number:'', method:'', type:'' });
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://day20.herokuapp.com/option/number')
        .then(res =>res)
        .then(data=>{
            setData(data.data.data)
        })
    },[])
    const handleChange = e =>{
        setNumber({...number, [e.target.name]: e.target.value});
    }
    const handleSubmit = () =>{
        axios.post('https://day20.herokuapp.com/option/number',number)
        .then(res =>res)
        .then(data=>{
            store.dispatch({
                type: 'SET_ALERT',
                payload:{
                    message: data.data.message,
                    error:data.data.error
                }
            })
        })
        setData([...data, number])
    }
    const handleDelete = id =>{
        axios.delete(`https://day20.herokuapp.com/option/number?id=${id}`)
        .then(res =>res)
        .then(data=>{
            store.dispatch({
                type: 'SET_ALERT',
                payload:{
                    message: data.data.message,
                    error:data.data.error
                }
            })
        })
        const newNumber = data.filter(n=>id!==n._id)
        setData(newNumber)
    }
    return (
        <div>
    <br />            
            <div>
                <input onChange={handleChange} name="number" placeholder="Phone Number" type="text" />
            </div>

    <br />            
            
            <div>
                <input onChange={handleChange} name="method" placeholder="Method" type="text" />
            </div>
    <br />            
            <div>
                <input onChange={handleChange} name="type" placeholder="Type" type="text" />
            </div>
    <br />            

            <div>
              <button onClick={handleSubmit} type="submit">Submit</button>
            </div>

        <br />
        <br />
        <div className="newShow">
            {data.map(d=> <div key={d._id}>
                <span>{d.number}</span> <span>Bi{d.method}</span> <span>{d.type}</span> <button onClick={()=>handleDelete(d._id)}>Delete</button>
            </div>)}
           
        </div>

        </div>
    );
};

export default Number;