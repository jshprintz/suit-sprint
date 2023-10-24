// --------------------------------
// Returns Card object out of the Deck object
// --------------------------------

import { ICardProps } from "../types/interfaces";

const drawCard = (deck: ICardProps[]): ICardProps => {
  const card: ICardProps | undefined = deck.shift();
  if (card) {
    return card;
  } else {
    return { rank: "", suit: "", flipped: true, row: 0 };
  }
};

export default drawCard;
