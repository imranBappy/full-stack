const columns = () =>([
  { id: 'name', label: 'Name', minWidth: 170 },
  { 
    id: 'balance', 
    label: 'Balance', 
    minWidth: 100 ,
    format: (value) => value.toFixed(2),
  },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 170,
    // align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'username',
    label: 'Username',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'sName',
    label: 'S-Name',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  { 
    id: 'active', 
    label: 'Action', 
    minWidth: 100 ,
  },
  { id: 'club', label: 'Club', minWidth: 170 },
]);

export default columns
