import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class CardForm extends Component {
  render () {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Enter a new question and answer</Text>
          <TextInput
            placeholder='Question'
            style={styles.formInput}
          />
          <TextInput
            placeholder='Answer'
            style={styles.formInput}
          />

          <Button title="Add Card" style={styles.cardFormBtn}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20
  },
  cardFormBtn: {
    width: 300,
    marginTop: 40,
  },
  formInput: {
    height: 40,
    fontSize: 16,
    marginTop: 20,
    width: 300

  },
  screenHeading: {
    fontSize: 25
  }
});

export default connect()(CardForm);