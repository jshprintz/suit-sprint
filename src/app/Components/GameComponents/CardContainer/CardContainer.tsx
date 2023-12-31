import React from "react";
import styled from "styled-components";
import CardDisplay from "../CardDisplay/CardDisplay";
import { ICardContainerProps } from "../../types/interfaces";

const CardContainer = ({
  color,
  card,
  rowNum,
}: ICardContainerProps): React.JSX.Element => {
  const rank: string = card?.rank || "";
  const suit: string = card?.suit || "";
  const flipped: boolean = card?.flipped || false;
  const row: number = card?.row || 0;
  // If the card is not in the current row, hide it
  const isHidden: boolean = row !== rowNum || rank === "";

  return (
    <Container color={color}>
      {!isHidden && <CardDisplay rank={rank} suit={suit} flipped={flipped} />}
    </Container>
  );
};

const Container = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid black;

  height: 100%;
  width: 20%;

  background-color: ${(p) => p.color || "transparent"};
`;

export default CardContainer;
