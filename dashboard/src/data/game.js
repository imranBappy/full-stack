const columns = () =>([
  { 
    id: 'name', 
    label: 'Name', 
    minWidth: 100 ,
    format: (value) => value.toFixed(2),
  },
  {
    id: 'country1',
    label: 'Country 1',
    minWidth: 170,
    // align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'country2',
    label: 'Country 2',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'option',
    label: 'Option',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Data',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  { 
    id: 'status', 
    label: 'Status', 
    minWidth: 170 
  },
  { 
    id: 'isActive', 
    label: 'isActive', 
    minWidth: 170 
  },
  {
    id:'type', 
    label:'Type', 
    minWidth:170 
  }
]);

export default columns
