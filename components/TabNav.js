import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeckList from './DeckList'
import DeckForm from './DeckForm'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class TabNav extends Component {
  render () {
    return (
        <Tab.Navigator
          initialRouteName="DeckList"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'DeckList') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              } else if (route.name === 'DeckForm') {
                iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0080ff',
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