import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import SingpuPage from './pages/SingpuPage/SingpuPage';
import MenuT from './test/MenuT/MenuT';
const App = () => {
  return (
    <>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="/register">
          <SingpuPage/>
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        
        <Route path='/test'>
          <MenuT></MenuT>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>

        <Route path="*">
          <h1>Page not found</h1>
        </Route>
        
      </Switch>
      
    </>
  );
};
// 
export default App;
