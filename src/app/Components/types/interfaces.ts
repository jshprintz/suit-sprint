interface ICardProps {
  rank: string;
  suit: string;
  flipped: boolean;
  hidden?: boolean;
  row: number;
}

interface IBlockColorProps {
  [key: number]: string;
}

interface ICardRowProps {
  color: string;
  cards: ICardProps[];
  rowNum: number
}

export type { ICardProps, IBlockColorProps, ICardRowProps };
