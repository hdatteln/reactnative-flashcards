export function getDecks () {
  return {
    //all of the decks along with their titles, questions, and answers.
  }
}

export function getDeck (id) {
  return {
    //take in a single id argument and return the deck associated with that id.
  }
}

export function saveDeckTitle(title) {
  return {
    // take in a single title argument and add it to the decks.
  }

}

export function addCardToDeck(title, card) {
  return {
    //take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
  }
}
