import React from "react";
import styled from "styled-components";
import CardContainer from "../CardContainer/CardContainer";
import { ICardProps, ICardRowProps } from "../../types/interfaces";

const CardRow = ({
  color,
  aces,
  rowNum,
  speedBump,
  topCard,
}: ICardRowProps): React.JSX.Element => {
  return (
    <Container color={color}>
      {/* Map out the Aces */}
      {aces.map((ace, i) => {
        if (topCard.suit === ace.suit) {
          ace.row += 1;
        }
        return <CardContainer key={i} card={ace} rowNum={rowNum} />;
      })}

      {/* Last Column Cards */}
      {/* Deck */}
      {rowNum === 0 && (
        <CardContainer color="white" card={topCard} rowNum={rowNum} />
      )}
      {/* Row One */}
      {rowNum === 1 && (
        <CardContainer color="white" card={speedBump[1]} rowNum={rowNum} />
      )}
      {/* Row Two */}
      {rowNum === 2 && (
        <CardContainer color="white" card={speedBump[2]} rowNum={rowNum} />
      )}
      {/* Row Three */}
      {rowNum === 3 && (
        <CardContainer color="white" card={speedBump[3]} rowNum={rowNum} />
      )}
      {/* Row Four */}
      {rowNum === 4 && (
        <CardContainer color="white" card={speedBump[4]} rowNum={rowNum} />
      )}
      {/* Row Five */}
      {rowNum === 5 && (
        <CardContainer color="white" card={speedBump[5]} rowNum={rowNum} />
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
