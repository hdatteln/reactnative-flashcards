import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider } from 'react-native-elements';

class QuizAnswer extends Component {

  render () {
    const {currentQuestionIdx, deckId, decks, numQuestions, quizQuestions, validateOk, validateNotOk} = this.props;
    const percentageCompleted = Math.round((currentQuestionIdx + 1) / numQuestions * 100);

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Card {(currentQuestionIdx + 1)} of {numQuestions}</Text>
          <Text style={styles.screenDesc}>{percentageCompleted}% completed</Text>
          <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
          <Text style={styles.quizContentText}>Answer:</Text>
          <Text style={styles.quizContentText}>{quizQuestions[currentQuestionIdx].answer}</Text>
          <View style={styles.btnBox}>
            <Button
              title="Knew it!"
              style={styles.quiz2FormBtn}
              onPress={validateOk}
            />
            <Button
              title="Got it wrong"
              name="incorrect"
              style={styles.quiz2FormBtn}
              onPress={validateNotOk}
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

export default connect(mapStateToProps)(QuizAnswer);