import { IBlockColorProps, ICardProps } from "../types/interfaces";

const BlockColor: IBlockColorProps = {
  5: "#ffffff",
  4: "#cfdde1",
  3: "#b1cfcb",
  2: "#9ec7b3",
  1: "#85cca7",
  0: "#6bd199",
};

const AceHearts: ICardProps = {
  rank: "A",
  suit: "Hearts",
  flipped: false,
  hidden: true,
};

const AceDiamonds: ICardProps = {
  rank: "A",
  suit: "Diamonds",
  flipped: false,
  hidden: true,
};

const AceSpades: ICardProps = {
  rank: "A",
  suit: "Spades",
  flipped: false,
  hidden: true,
};

const AceClubs: ICardProps = {
  rank: "A",
  suit: "Clubs",
  flipped: false,
  hidden: true,
};


export {AceClubs, AceDiamonds, AceHearts, AceSpades, BlockColor};