/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Route } from 'react-router-dom';
import Layout, {Statement, PrivateRoute, Dashboard, Home, _Login, _Signup, _Wallet} from './components/Layout/Layout';

const App = () => {
  return (
    <>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={_Signup} />
          <Route exact path="/login" component={_Login} />
          <PrivateRoute path='/statement' >
            <Statement/>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
        </Layout>
      
    </>
  );
};
// 
export default  App;
