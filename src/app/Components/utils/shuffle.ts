// -------------------------------------
// File: shuffle.ts
// Return: Shuffled deck of cards
// -------------------------------------

interface IDeckProps {
  value: string;
  suit: string;
}

const Shuffle = () => {
  const suits = ["♥", "♦", "♠", "♣"];
  const values = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  const deck: IDeckProps[] = [];

  // Populate a deck of cards
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      const card = { value: values[x], suit: suits[i] };
      deck.push(card);
    }
  }

  // Shuffle the deck
  const shuffleDeck = () => {
    for (let i = 0; i < 1000; i++) {
      const location1 = Math.floor(Math.random() * deck.length);
      const location2 = Math.floor(Math.random() * deck.length);
      const tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  };

  shuffleDeck();

  return deck;
};

export default Shuffle;
