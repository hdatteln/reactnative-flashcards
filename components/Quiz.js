import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Divider } from 'react-native-elements';
import QuizScore from './QuizScore';
import QuizAnswer from './QuizAnswer';
import { getRoundedPercentage } from '../utils/helpers';

class Quiz extends Component {
  state = {
    quizPage: '',
    currentQuestionIdx: 0,
    score: 0
  };

  checkAnswer = () => {
    this.setState({
      quizPage: 'answer'
    });
  };

  restartQuiz = () => {
    this.setState({
      quizPage: '',
      currentQuestionIdx: 0,
      score: 0
    });
  };

  validateOk = () => {
    this.validateAnswer(true);
  };
  validateNotOk = () => {
    this.validateAnswer(false);
  };
  validateAnswer = (isCorrect) => {
    const {route, decks} = this.props;
    const {deckDetails} = route.params;
    const deck = decks[deckDetails.name];
    const {score, currentQuestionIdx} = this.state;
    const newScore = isCorrect ? score + 1 : score;
    console.log('Score', newScore, isCorrect);
    if ((currentQuestionIdx + 1) === deck.questions.length) {
      // all questions processed; show score
      this.setState({
        score: newScore,
        quizPage: 'score'
      });
    } else {
      // update score and go to next question
      this.setState({
        score: newScore,
        quizPage: 'quiz',
        currentQuestionIdx: currentQuestionIdx + 1
      });
    }
  };

  render () {
    const {navigation, route, decks} = this.props;
    const {deckDetails} = route.params;
    const currentDeck = decks[deckDetails.name];
    const quizQuestions = currentDeck.questions;
    const {quizPage, currentQuestionIdx, score} = this.state;
    const numQuestions = quizQuestions.length;
    const percentageCompleted = getRoundedPercentage((currentQuestionIdx + 1), numQuestions);
    if (numQuestions === 0) {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer]}>
            <Text style={styles.screenHeading}>No Quiz Questions Yet</Text>
          </View>
        </View>
      );
    }

    if (quizPage === 'answer') {
      return (
        <QuizAnswer
          currentQuestionIdx={currentQuestionIdx}
          deckId={deckDetails.name}
          numQuestions={numQuestions}
          quizQuestions={quizQuestions}
          validateOk={this.validateOk}
          validateNotOk={this.validateNotOk}
        />
      );

    } else if (quizPage === 'score') {
      return (
        <QuizScore
          score={score}
          numQuestions={numQuestions}
          restartQuiz={this.restartQuiz}
          navigation={navigation}
        />
      );
    }

    return (
      <View style={styles.container}>
        <View style={[styles.bodyContainer]}>
          <Text style={styles.screenHeading}>Card {(currentQuestionIdx + 1)} of {numQuestions}</Text>
          <Text style={styles.screenDesc}>{percentageCompleted}% completed</Text>
          <Divider style={{margin: 40, height: 2, width: 300, backgroundColor: '#e1e8ee'}}/>
          <Text style={styles.quizContentText}>Question:</Text>
          <Text style={styles.quizContentText}>{quizQuestions[currentQuestionIdx].question}</Text>
          <Button
            title="View Answer"
            style={styles.quizFormBtn}
            onPress={this.checkAnswer}
          />
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
  return {decks};
}

export default connect(mapStateToProps)(Quiz);