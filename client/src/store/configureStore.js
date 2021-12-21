///////////////////////////////////////////////////////////////////////////////////MODULES
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//////////////////////////////////////////////////////////////////////////////////REDUCERS
import devices from '../reducers/devices';
//////////////////////////////////////////////////////////////////////////////////////////

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const configureStore = () => {
  const store = createStore(
    combineReducers({
      devices,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
