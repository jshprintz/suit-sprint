import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer/CardContainer";
import { ICardRowProps } from "../../types/interfaces";

const CardRow = ({
  color,
  cards,
  rowNum,
}: ICardRowProps): React.JSX.Element => {
  return (
    <Container color={color}>
      {cards.map((card, i) => {
        

        return <CardContainer key={i} card={card} rowNum={rowNum} />;
      })}
      <CardContainer color="white" rowNum={rowNum} />
    </Container>
  );
};

const Container = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 2px solid black;

  height: 16.6667%;
  width: 100%;

  background-color: ${(p) => p.color};
`;

export default CardRow;
