const columns = () =>([
    { 
        id: 'createdAt', 
        label: 'Date', 
        minWidth: 100 ,
    },
    { 
        id: 'UsersUsername', 
        label: 'Username', 
        minWidth: 100 ,
    },
    { 
        id: 'amount', 
        label: 'Amount', 
        minWidth: 100 ,
    },
    { 
        id: 'number', 
        label: 'Number', 
        minWidth: 100 ,
    },
    {
        id: 'method',
        label: 'Method',
        maxWidth: 100
    },
    {
        id: 'status',
        label: 'Status',
        maxWidth: 150
    }
]);
  
  export default columns
  