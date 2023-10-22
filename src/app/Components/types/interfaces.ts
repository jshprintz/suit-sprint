interface ICardProps {
  rank: string;
  suit: string;
  flipped: boolean;
  row: number;
}

interface IBlockColorProps {
  [key: number]: string;
}

interface ICardRowProps {
  color: string;
  cards: ICardProps[];
  rowNum: number;
}

interface ICardContainerProps {
  color?: string;
  card?: ICardProps;
  rowNum: number;
}

interface ICardDisplayProps {
  rank: string;
  suit: string;
  flipped: boolean;
}

export type {
  ICardProps,
  IBlockColorProps,
  ICardRowProps,
  ICardContainerProps,
  ICardDisplayProps,
};
