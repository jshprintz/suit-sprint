// -------------------------------------
// File: shuffle.ts
// Return: Shuffled deck of cards
// -------------------------------------

import { ICardProps } from "../types/interfaces";

const Shuffle = () => {
  const suit = ["♥", "♦", "♠", "♣"];
  const rank = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
  const deck: ICardProps[] = [];

  // Populate a deck of cards
  for (let i = 0; i < suit.length; i++) {
    for (let x = 0; x < rank.length; x++) {
      const card: ICardProps = {
        rank: rank[x],
        suit: suit[i],
        flipped: true,
        row: 0,
      };
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
