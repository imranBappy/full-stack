import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxers from './reducers/reducers';

const middlewares = [thunk];

const store = createStore(reduxers, compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;


// window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()