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

const RowOne: ICardProps = {
  rank: "K",
  suit: "♥",
  flipped: true,
  row: 1,
};

const RowTwo: ICardProps = {
  rank: "Q",
  suit: "♥",
  flipped: true,
  row: 2,
};

const RowThree: ICardProps = {
  rank: "J",
  suit: "♥",
  flipped: true,
  row: 3,
};

const RowFour: ICardProps = {
  rank: "10",
  suit: "♥",
  flipped: true,
  row: 4,
};

const RowFive: ICardProps = {
  rank: "9",
  suit: "♥",
  flipped: true,
  row: 5,
};

export {
  AceClubs,
  AceDiamonds,
  AceHearts,
  AceSpades,
  BlockColor,
  RowOne,
  RowTwo,
  RowThree,
  RowFour,
  RowFive,
};
