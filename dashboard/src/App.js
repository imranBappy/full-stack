import React, { createContext, useState } from 'react';
import { connect } from 'react-redux';
import {
  Route, Switch
} from "react-router-dom";
import AlertMessage from './components/Alert/Alert';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Main from './test/Main';
export const DrawerContext = createContext()
const App = ({alert}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
     { alert.error && <AlertMessage/> }
      <Switch>
        <Route exact path = '/login' component={Login} />
        <PrivateRoute exact path='/_' >
  
          <DrawerContext.Provider value={[open,setOpen]} >
            <Main/>
          </DrawerContext.Provider>
        </PrivateRoute>
        
        <PrivateRoute path='/' >
          <DrawerContext.Provider value={[open,setOpen]} >
            <Dashboard/>
          </DrawerContext.Provider>
        </PrivateRoute>

      </Switch>
    </>
  );
};

const mapStateToProps = state =>({alert: state.alert})
export default connect(mapStateToProps)(App) ;