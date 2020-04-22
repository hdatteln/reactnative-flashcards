import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import styles from '../styles/appStyles'
class QuizAnswer extends Component {

  render () {
    const {currentQuestionIdx, deckId, decks, numQuestions, quizQuestions, validateOk, validateNotOk} = this.props;
    const percentageCompleted = Math.round((currentQuestionIdx + 1) / numQuestions * 100);

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Card {(currentQuestionIdx + 1)} of {numQuestions}</Text>
          <Text style={styles.screenDesc}>{percentageCompleted}% completed</Text>
          <Divider style={styles.divider}/>
          <Text style={styles.quizContentText}>Answer:</Text>
          <Text style={styles.quizContentText}>{quizQuestions[currentQuestionIdx].answer}</Text>
          <View style={styles.btnBox}>
            <TouchableOpacity
              title="Knew it!"
              style={styles.quiz2FormBtn}
              onPress={validateOk}
            ><Text style={styles.btnTxt}>Knew it!</Text></TouchableOpacity>
            <TouchableOpacity
              title="Got it wrong"
              name="incorrect"
              style={styles.quiz2FormBtn}
              onPress={validateNotOk}
            ><Text style={styles.btnTxt}>Got it wrong</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {decks}
}

export default connect(mapStateToProps)(QuizAnswer);