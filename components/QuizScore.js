import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import { getRoundedPercentage } from '../utils/helpers';
import { CommonActions } from '@react-navigation/native';
import styles from '../styles/appStyles';

class QuizScore extends Component {
  toHome = () => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Decks'
      })
    );
  };

  render () {
    const {score, numQuestions, restartQuiz} = this.props;
    const scorePercentage = getRoundedPercentage(score, numQuestions);

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Score</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.quizContentText}>{score} of {numQuestions} questions correct</Text>
          <Text style={styles.quizContentText}>(That's {scorePercentage}%)</Text>
          <View style={styles.btnBox}>
            <TouchableOpacity
              title="Restart Quiz"
              style={styles.quiz2FormBtn}
              onPress={restartQuiz}
            ><Text style={styles.btnTxt}>Restart Quiz</Text></TouchableOpacity>
            <TouchableOpacity
              title="Back to Decks"
              style={styles.quiz2FormBtn}
              onPress={this.toHome}
            ><Text style={styles.btnTxt}>Back to Decks</Text></TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {decks};
}

export default connect(mapStateToProps)(QuizScore);