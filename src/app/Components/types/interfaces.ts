interface ICardProps {
  rank: string;
  suit: string;
  flipped: boolean;
  hidden: boolean;
}

interface IBlockColorProps {
  [key: number]: string;
}

interface ICardRowProps {
  color: string;
  cards: ICardProps[];
}

export type { ICardProps, IBlockColorProps, ICardRowProps };
