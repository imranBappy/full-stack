/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout, {Statement, PrivateRoute, Dashboard, Home, _Login, _Signup, _Wallet} from './components/Layout/Layout';
const App = () => {
  return (
    <>
      <Switch>
        <Layout>
        
        <Route exact path="/" component={Home} />
        <Route path="/register" component={_Signup} />
        <Route path="/login" component={_Login} />
        <PrivateRoute path='/statement' component={Statement} />
        <PrivateRoute path="/wallet" component={_Wallet} />
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        </Layout>
      </Switch>
    </>
  );
};
// 
export default  App;
