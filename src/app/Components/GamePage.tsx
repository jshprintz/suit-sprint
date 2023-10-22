import React from "react";
import styled from "styled-components";
import CardRow from "./GameComponents/CardRow/CardRow";
import { ICardProps } from "./types/interfaces";
import { AceHearts, AceDiamonds, AceSpades, AceClubs, BlockColor } from "./objects/gameObjects";

const GamePage: React.FC = () => {
  const cardRow: ICardProps[] = [AceHearts, AceDiamonds, AceSpades, AceClubs];
  const gameBoard = [cardRow, cardRow, cardRow, cardRow, cardRow, cardRow];

  return (
    <Container>
      <Winner>
        <h1>Winner</h1>
      </Winner>
      <CardRowContainer>
        {gameBoard.map((row, index) => {
          return <CardRow key={index} color={BlockColor[index]} cards={row} />;
        })}
      </CardRowContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
`;

const CardRowContainer = styled(Container)`
  width: 80%;
  height: 100%;
  border: 2px solid black;
`;

const Winner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  width: 60%;
  height: 20%;

  margin: 10px;
`;

export default GamePage;
