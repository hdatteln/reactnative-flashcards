import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider } from 'react-native-elements';
import { getRoundedPercentage } from '../utils/helpers';
import { CommonActions } from '@react-navigation/native';

class QuizScore extends Component {
  toHome = () => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Decks',
      })
    )
  };

  render () {
    const {score, numQuestions, restartQuiz} = this.props;
    const scorePercentage = getRoundedPercentage(score, numQuestions);

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Score</Text>
          <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
          <Text style={styles.quizContentText}>{score} of {numQuestions} questions correct</Text>
          <Text style={styles.quizContentText}>(That's {scorePercentage}%)</Text>
          <View style={styles.btnBox}>
            <Button
              title="Restart Quiz"
              style={styles.quiz2FormBtn}
              onPress={restartQuiz}
            />
            <Button
              title="Back to Decks"
              style={styles.quiz2FormBtn}
              onPress={this.toHome}
            />
          </View>

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

function mapStateToProps (decks) {
  return {decks}
}

export default connect(mapStateToProps)(QuizScore);