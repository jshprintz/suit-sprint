import React from "react";
import styled from "styled-components";
import PlayingCard from "../CardDisplay/CardDisplay";
import { ICardProps } from "../../types/interfaces";

interface CardContainerProps {
  color?: string;
  card?: ICardProps;
}

const CardContainer = ({
  color,
  card,
}: CardContainerProps): React.JSX.Element => {
  const rank: string = card?.rank || "";
  const suit: string = card?.suit || "";
  const hidden: boolean = card?.hidden || false;
  const flipped: boolean = card?.flipped || false;

  return (
    <Container color={color}>
      <PlayingCard rank={rank} suit={suit} flipped={flipped} hidden={hidden} />
    </Container>
  );
};

const Container = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid black;

  height: 100%;
  width: 20%;

  background-color: ${(p) => p.color || "transparent"};
`;

export default CardContainer;
