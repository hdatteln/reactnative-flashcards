import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './components/TabNav'
import { createStackNavigator } from '@react-navigation/stack';
import CardForm from './components/CardForm'
import Deck from './components/Deck'
import Quiz from './components/Quiz'

const Stack = createStackNavigator();
function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Decks" component={TabNav} />
            <Stack.Screen name="CardForm" component={CardForm} options={{
                title: 'Add Card',
            }} />
            <Stack.Screen name="Deck" component={Deck} options={{
                title: 'Deck Details',
            }} />
            <Stack.Screen name="Quiz" component={Quiz} options={{
                title: 'Quiz',
            }} />
        </Stack.Navigator>
    );
}


export default function App() {
  return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
        <NavigationContainer><MainNavigator /></NavigationContainer>
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

    }
});