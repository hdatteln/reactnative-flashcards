import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import DeckList from './components/DeckList';


export default function App() {
  return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
            <View style={[styles.box]}/>
            <View style={[styles.box]}/>
            <View style={[styles.box]}/>
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',

    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e7ae63',
        margin: 10,
    }
});


