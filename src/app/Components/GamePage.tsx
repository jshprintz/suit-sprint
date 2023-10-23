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
  const deck: ICardProps[] = Shuffle();

  const drawCard = (): ICardProps => {
    const card: ICardProps | undefined = deck.shift();
    if (card) {
      return card;
    } else {
      return { rank: "", suit: "", flipped: true, row: 0 };
    }
  };

  // Draw the five speed bump cards
  const rowOne: ICardProps = drawCard();
  const rowTwo: ICardProps = drawCard();
  const rowThree: ICardProps = drawCard();
  const rowFour: ICardProps = drawCard();
  const rowFive: ICardProps = drawCard();

  rowOne.row = 1;
  rowTwo.row = 2;
  rowThree.row = 3;
  rowFour.row = 4;
  rowFive.row = 5;

  const speedBump = {
    1: rowOne,
    2: rowTwo,
    3: rowThree,
    4: rowFour,
    5: rowFive,
  };

  console.log(deck);
  console.log("BUMP", speedBump);

  return (
    <Container>
      <TopLevel>
        <Button>Shuffle</Button>
        <h1>TopLevel</h1>
        <Button>Draw Card</Button>
      </TopLevel>
      <CardRowContainer>
        {gameBoard.map((cards, index) => {
          const rowNum: number = gameBoard.length - index - 1;
          return (
            <CardRow
              key={index}
              color={BlockColor[rowNum]}
              rowNum={rowNum}
              cards={cards}
              speedBump={speedBump}
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

const TopLevel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 2px solid black;
  width: 60%;
  height: 20%;

  margin: 10px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50%;
  padding: 10px;
  background-color: green;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 1px 2px 2px 2px grey;
  transform: translateY(2px);

  &:active {
    box-shadow: 0px 0px 0px 0px grey;
    transform: translateY(4px);
  }
`;

export default GamePage;
