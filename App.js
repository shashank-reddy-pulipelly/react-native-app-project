import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

import Main from './components/MainComponent';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Main />
    </Provider>
    );
  }
}
