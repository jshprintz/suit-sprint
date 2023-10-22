import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer/CardContainer";
import { ICardRowProps } from "../../types/interfaces";
import {
  RowFive,
  RowFour,
  RowOne,
  RowThree,
  RowTwo,
} from "../../objects/gameObjects";

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
      {rowNum === 0 && <CardContainer color="white" rowNum={rowNum} />}
      {rowNum === 1 && (
        <CardContainer color="white" card={RowOne} rowNum={rowNum} />
      )}
      {rowNum === 2 && (
        <CardContainer color="white" card={RowTwo} rowNum={rowNum} />
      )}
      {rowNum === 3 && (
        <CardContainer color="white" card={RowThree} rowNum={rowNum} />
      )}
      {rowNum === 4 && (
        <CardContainer color="white" card={RowFour} rowNum={rowNum} />
      )}
      {rowNum === 5 && (
        <CardContainer color="white" card={RowFive} rowNum={rowNum} />
      )}
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
