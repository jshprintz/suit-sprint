import React, { useState } from "react";
import styled from "styled-components";
import CardRow from "./GameComponents/CardRow/CardRow";
import { ICardProps } from "./types/interfaces";
import {
  AceHearts,
  AceDiamonds,
  AceSpades,
  AceClubs,
  BlockColor,
} from "./objects/gameObjects";
import Shuffle from "./utils/shuffle";

const GamePage: React.FC = () => {
  const cardRow: ICardProps[] = [AceHearts, AceSpades, AceDiamonds, AceClubs];
  const gameBoard = [cardRow, cardRow, cardRow, cardRow, cardRow, cardRow];
  const [isInit, setIsInit] = useState<boolean>(false);
  let deck = [];

  // Initialize and shuffle the deck
  if (!isInit) {
    deck = Shuffle();
    setIsInit(true);
  }

  return (
    <Container>
      <Winner>
        <h1>Winner</h1>
      </Winner>
      <CardRowContainer>
        {gameBoard.map((cards, index) => {
          const rowNum: number = gameBoard.length - index - 1;
          return (
            <CardRow
              key={index}
              color={BlockColor[rowNum]}
              rowNum={rowNum}
              cards={cards}
            />
          );
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
