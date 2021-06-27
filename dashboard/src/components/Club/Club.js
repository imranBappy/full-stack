import React from 'react';
import Table from '../Table/Table';
const Club = () => {
    const action = () =>{
        console.log('action');
    }
    return (
        <div>
            <Table
                columns = {[]}
                rows = {[]}
                length={0}
                path='/club'
                action = {action}
                btnName = {'Add Bet'}
                btnPath = {`/add-club`}
            />
        </div>
    );
};

export default Club;