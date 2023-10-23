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
  speedBump: {
    1: ICardProps;
    2: ICardProps;
    3: ICardProps;
    4: ICardProps;
    5: ICardProps;
  };
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
