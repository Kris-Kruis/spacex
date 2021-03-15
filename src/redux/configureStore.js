import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import sagaMiddlewareDeffered from './sagaMiddleware';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(
      applyMiddleware(sagaMiddlewareDeffered, sagaMiddleware),
    )
  );

  sagaMiddleware.run(rootSaga);
  return { store };
};

export default configureStore;
