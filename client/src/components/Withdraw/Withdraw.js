import React, { useState } from 'react';
        // transaction:'withdraw',
        // status:'Pending',
        // user:''
const Withdraw = () => {
    const [withdraw, setWithdraw] = useState({
        amount:0,
        type:'',
        number:'',
        method:'',
    })
    const handleChange = e =>{
        const name = e.target.name, value = e.target.value;
    }
    return (
        <div>
            <h1>Withdraw input component</h1>
            <input 
                onChange={handleChange}
                placeholder="Amount" 
                name='amount' 
                value={withdraw.amount}
                type="text" />
            <input 
                onChange={handleChange}
                placeholder="Amount" 
                name='amount' 
                value={withdraw.amount}
                type="text" />
            <input 
                onChange={handleChange}
                placeholder="Amount" 
                name='amount' 
                value={withdraw.amount}
                type="text" />
            <input 
                onChange={handleChange}
                placeholder="Amount" 
                name='amount' 
                value={withdraw.amount}
                type="text" />
        </div>
    );
};

export default Withdraw;