import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Divider } from 'react-native-elements';
import QuizScore from './QuizScore';
import QuizAnswer from './QuizAnswer';
import { getRoundedPercentage } from '../utils/helpers';
import styles from '../styles/appStyles';

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
          <Divider style={styles.divider}/>
          <Text style={styles.quizContentText}>Question:</Text>
          <Text style={[styles.quizContentText, {marginBottom: 20}]}>{quizQuestions[currentQuestionIdx].question}</Text>
          <TouchableOpacity
            title="View Answer"
            style={styles.quizFormBtn}
            onPress={this.checkAnswer}
          ><Text style={styles.btnTxt}>View Answer</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {decks};
}

export default connect(mapStateToProps)(Quiz);