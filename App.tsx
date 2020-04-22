import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './components/TabNav'
import {createStackNavigator} from '@react-navigation/stack';
import CardForm from './components/CardForm'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import styles from './styles/appStyles'
import { setLocalNotification } from './utils/helpers'

const Stack = createStackNavigator();

function MainNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Decks" component={TabNav} options={{
                title: 'Mobile Flashards',
            }}/>
            <Stack.Screen name="CardForm" component={CardForm} options={{
                title: 'Add Card',
            }}/>
            <Stack.Screen name="Deck" component={Deck} options={{
                title: 'Deck Details',
            }}/>
            <Stack.Screen name="Quiz" component={Quiz} options={{
                title: 'Quiz',
            }}/>
        </Stack.Navigator>
    );
}

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={styles.appContainer}>
                    <NavigationContainer><MainNavigator/></NavigationContainer>
                </View>
            </Provider>
        )
    }
}