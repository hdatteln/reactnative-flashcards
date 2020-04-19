import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import DeckListView from './components/DeckListView';


export default function App() {
  return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <DeckListView/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
