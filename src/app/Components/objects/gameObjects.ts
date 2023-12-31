import { IBlockColorProps, ICardProps } from "../types/interfaces";

const BlockColor: IBlockColorProps = {
  0: "#ffffff",
  1: "#cfdde1",
  2: "#b1cfcb",
  3: "#9ec7b3",
  4: "#85cca7",
  5: "#6bd199",
};

const AceHearts: ICardProps = {
  rank: "A",
  suit: "♥",
  flipped: false,
  row: 0,
};

const AceDiamonds: ICardProps = {
  rank: "A",
  suit: "♦",
  flipped: false,
  row: 0,
};

const AceSpades: ICardProps = {
  rank: "A",
  suit: "♠",
  flipped: false,
  row: 0,
};

const AceClubs: ICardProps = {
  rank: "A",
  suit: "♣",
  flipped: false,
  row: 0,
};

export { AceClubs, AceDiamonds, AceHearts, AceSpades, BlockColor };
