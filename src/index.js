import React, {Component} from 'react';
import AppNavigator from './AppNavigator';
import {View, StyleSheet} from 'react-native';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

const {store, persistor} = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.fg}>
            <AppNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  fg: {
    flexGrow: 1,
  },
});
