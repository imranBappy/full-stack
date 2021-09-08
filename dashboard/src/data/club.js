const columns = () =>([
    { 
        id: 'name', 
        label: 'Name', 
        minWidth: 100 ,
    },
    { 
        id: 'user', 
        label: 'User', 
        minWidth: 100 ,
    },
    { 
        id: 'clubId', 
        label: 'Club Id', 
        minWidth: 100 ,
    },
    {
        id: 'clubHolder',
        label: 'clubHolder',
        maxWidth: 100
    },
    {
        id: 'balance',
        label: 'Balance',
        maxWidth: 100
    }
]);
  
  export default columns
  