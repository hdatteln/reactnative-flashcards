import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider } from 'react-native-elements';

class Quiz extends Component {
  state = {
    quizPage: 'score'
  };

  render () {
    const {navigation} = this.props;
    const {quizPage} = this.state;
    console.log(quizPage);
    if (quizPage === 'answer') {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer]}>
            <Text style={styles.screenHeading}>Card 1 of 10</Text>
            <Text style={styles.screenDesc}>10% completed</Text>
            <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
            <Text style={styles.quizContentText}>Answer:</Text>
            <Text style={styles.quizContentText}>Paris</Text>
            <View style={styles.btnBox}>
              <Button title="Knew it!" style={styles.quiz2FormBtn}/>
              <Button title="Got it wrong" style={styles.quiz2FormBtn}/>
            </View>
          </View>
        </View>
      );

    } else if (quizPage === 'score') {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer]}>
            <Text style={styles.screenHeading}>Score</Text>
            <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
            <Text style={styles.quizContentText}>8 of 10 questions correct</Text>
            <Text style={styles.quizContentText}>(That's 80%)</Text>
            <View style={styles.btnBox}>
              <Button title="Restart Quiz" style={styles.quiz2FormBtn}/>
              <Button
                title="Back to Decks"
                style={styles.quiz2FormBtn}
                onPress={() => navigation.navigate(
                  'Decks'
                )}
              />
            </View>

          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Card 1 of 10</Text>
          <Text style={styles.screenDesc}>10% completed</Text>
          <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
          <Text style={styles.quizContentText}>Question:</Text>
          <Text style={styles.quizContentText}>What is the capital of France?</Text>
          <Button title="View Answer" style={styles.quizFormBtn}/>
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
  quizFormBtn: {
    width: 300,
    marginTop: 40
  },
  quiz2FormBtn: {
    width: 140,
    margin: 10
  },
  formInput: {
    height: 40,
    fontSize: 16,
    marginTop: 20,
    width: 300

  },
  screenHeading: {
    fontSize: 25
  },
  screenDesc: {
    marginBottom: 10
  },
  quizContentText: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginRight: 35
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center'
  }
});

export default connect()(Quiz);