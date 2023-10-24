import React, { useEffect, useState } from "react";
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
import drawCard from "./utils/drawCard";

const GamePage: React.FC = () => {
  const cardRow: ICardProps[] = [AceHearts, AceSpades, AceDiamonds, AceClubs];
  const gameBoard = [cardRow, cardRow, cardRow, cardRow, cardRow, cardRow];
  let deck: ICardProps[] = Shuffle();
  let rowOne: ICardProps = drawCard(deck);
  let rowTwo: ICardProps = drawCard(deck);
  let rowThree: ICardProps = drawCard(deck);
  let rowFour: ICardProps = drawCard(deck);
  let rowFive: ICardProps = drawCard(deck);
  const [topCard, setTopCard] = useState<ICardProps>({
    rank: "Draw Card",
    suit: "",
    flipped: false,
    row: 0,
  });

  topCard.flipped = false;

  rowOne.row = 1;
  rowTwo.row = 2;
  rowThree.row = 3;
  rowFour.row = 4;
  rowFive.row = 5;

  // Draw the five speed bump cards
  const speedBump = {
    1: rowOne,
    2: rowTwo,
    3: rowThree,
    4: rowFour,
    5: rowFive,
  };

  const reset = (): void => {
    deck = [];
    deck = Shuffle();

    rowOne = drawCard(deck);
    rowTwo = drawCard(deck);
    rowThree = drawCard(deck);
    rowFour = drawCard(deck);
    rowFive = drawCard(deck);

    rowOne.row = 1;
    rowTwo.row = 2;
    rowThree.row = 3;
    rowFour.row = 4;
    rowFive.row = 5;

    speedBump[1] = rowOne;
    speedBump[2] = rowTwo;
    speedBump[3] = rowThree;
    speedBump[4] = rowFour;
    speedBump[5] = rowFive;

    console.log("Deck:", deck);
    console.log("BUMP", speedBump);
  };

  const nextCard = () => {
    setTopCard(drawCard(deck));
  };

  // TODO: Every time a card is drawn it resets the deck. This is an obvious bug that needs to be resolved either by passing down the useState hook to change the card at the top level
  // TODO: or to research REDUX finally and use state management to take care of it. This may be a good use case for the latter, but the first would be easier.
  
  console.log(deck);

  return (
    <Container>
      <TopLevel>
        <Button
          onClick={() => {
            reset();
          }}
        >
          Shuffle
        </Button>
        <h1>TopLevel</h1>
        <Button
          onClick={() => {
            nextCard();
          }}
        >
          Draw Card
        </Button>
      </TopLevel>
      <CardRowContainer>
        {gameBoard.map((aces, index) => {
          const rowNum: number = gameBoard.length - index - 1;
          return (
            <CardRow
              key={index}
              color={BlockColor[rowNum]}
              rowNum={rowNum}
              aces={aces}
              speedBump={speedBump}
              topCard={topCard}
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
