import { StyleSheet } from 'react-native';

const appColors = {
  green: '#609c4f',
  gray: '#dedede',
  white: '#ffffff',
  red: '#ff3322'
};

export default StyleSheet.create({
  /* App */
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  /* DeckList */
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20
  },
  screenHeading: {
    fontSize: 25
  },
  screenDesc: {
    marginTop: 20,
    marginBottom: 20
  },
  bodyContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  },
  listView: {
    flexDirection: 'row',
    backgroundColor: appColors.white,
    padding: 8,
    margin: 2,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  deckListItem: {
    width: 280,
    fontSize: 16,
  },
  listIcon: {
    alignSelf: 'flex-end'
  },


  /* CardForm */

  cardFormBtn: {
    width: 295,
    height: 40,
    backgroundColor: appColors.green,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInput: {
    height: 40,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    backgroundColor: appColors.white,
    borderRadius: 5,
    paddingLeft: 8,
    paddingRight: 8
  },

  /* Deck */
  deckBtn: {
    width: 250,
    height: 40,
    backgroundColor: appColors.green,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    color: appColors.white,
  },
  deleteBtn: {
    backgroundColor: appColors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 50,
    width: 150,
    height: 40,
  },

  /* DeckForm */
  deckFormBtn: {
    width: 295,
    height: 40,
    backgroundColor: appColors.green,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /* Quiz */
  quizFormBtn: {
    width: 295,
    height: 40,
    backgroundColor: appColors.green,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quiz2FormBtn: {
    width: 140,
    height: 40,
    backgroundColor: appColors.green,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quiz2FormBtnRed: {
    width: 140,
    height: 40,
    backgroundColor: appColors.red,
    borderRadius: 7,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  divider: {
    margin: 10,
    height: 2,
    width: 300,
    backgroundColor: appColors.gray
  }

  /* QuizAnswer */
  /* QuizScore */

});