import Axios from 'axios';
import jwt_decide from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as Types from './store/actions/types';
import store from './store/store';
import setAuthToken from './utils/setAuthHeader';

const token = localStorage.getItem('admin-token');

if (token) {
    
    const decode = jwt_decide(token);
    store.dispatch({
      type: Types.SET_AUTH,
      payload:{
        auth: true,
        user:decode,
        token
      }
    })
    Axios.get(`/admin/single-user/${decode._id}`,{
      	headers:{
          authorization: token
        }
    }).then((res)=>{
      if (res.data.error) {
        localStorage.removeItem('admin-token')
        store.dispatch({
          type: Types.SET_AUTH,
          payload:{
            auth: false,
            user: {},
            token: ''
          }
        })
      }else{
        store.dispatch({
          type: Types.SET_AUTH,
          payload:{
            auth: true,
            user: res.data.data? res.data.data[0] : {},
            token
          }
        })
      }
    }).catch(()=>{
      store.dispatch({
          type: Types.SET_AUTH,
          payload:{
            auth: false,
            user: {},
            token: ''
          }
        })
    })
}else{
        store.dispatch({
          type: Types.SET_AUTH,
          payload:{
            auth: false,
            user: {},
            token: ''
          }
        })
}
setAuthToken(token);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
