import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckList from './DeckList'
import DeckForm from './DeckForm'

const Tab = createBottomTabNavigator();

class TabNav extends Component {
  render () {
    return (
        <Tab.Navigator
          initialRouteName="DeckList"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>
          <Tab.Screen
            name="DeckList"
            component={DeckList}
            options={{
              tabBarLabel: 'Decks',
            }}
          />
          <Tab.Screen
            name="DeckForm"
            component={DeckForm}
            options={{
              tabBarLabel: 'Add Deck',
            }}
          />
        </Tab.Navigator>
    )
  }
}

export default TabNav;