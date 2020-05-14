import {createStore, compose, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducers';
import thunk from 'redux-thunk';

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = persistReducer(config, reducer);

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return {persistor, store};
}
