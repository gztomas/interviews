/*
In a casino, all the playing cards got mixed up, and some of them got lost. You have to collect as many full decks as possible.

  You get N mixed up French playing cards as your input.

  The cards are of the following ranks:
  2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A

The four suits are:
  S - Spade (♠), C - Club(♣), H - Heart(♥), D - Diamond(♦)

The cards are given using their rank followed by their suit:

  2 of Spades: 2S
Ace of Clubs: AC
10 of Hearts: TH

Write a function that will accept an array of cards and return the number of full decks contained in the array.

  Examples:
a) ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"] -> 0

b) ["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"] -> 2
*/

function fullDecks(cards) {

  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const suits = ['S', 'C', 'H', 'D'];
  const decks = {};

  for (let i = 0; i < ranks.length; i++) {
    let rank = ranks[i];
    for (let j = 0; j < suits.length; j++) {
      let suit = suits[j];
      decks[rank + suit] = 0;
    }
  }

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    decks[card]++;
  }

  let deckCards = Object.keys(decks);
  let fullDecks = decks['2S'];

  for (let i = 0; i < deckCards.length; i++) {
    let card = deckCards[i];
    fullDecks = Math.min(fullDecks, decks[card]);
  }

  return fullDecks;
}

console.log(fullDecks(["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"]), 0);

console.log(fullDecks(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"]), 2);