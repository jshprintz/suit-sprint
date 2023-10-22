import React from "react";
import styled from "styled-components";
import CardRow from "./GameComponents/CardRow/CardRow";
import PlayingCard from "./GameComponents/PlayingCard/PlayingCard";

interface IBlockColorProps {
  [key: number]: string;
}

const BlockColor: IBlockColorProps = {
  0: "#ffffff",
  1: "#cfdde1",
  2: "#b1cfcb",
  3: "#9ec7b3",
  4: "#85cca7",
  5: "#6bd199",
};

const AceHearts = {
  rank: "A",
  suit: "Hearts",
  flipped: false,
  hidden: false,
};

const AceDiamonds = {
  rank: "A",
  suit: "Diamonds",
  flipped: false,
  hidden: false,
};

const AceSpades = {
  rank: "A",
  suit: "Spades",
  flipped: false,
  hidden: false,
};

const AceClubs = {
  rank: "A",
  suit: "Clubs",
  flipped: false,
  hidden: false,
};

const GamePage: React.FC = () => {
  const aceHearts = (
    <PlayingCard
      rank={AceHearts.rank}
      suit={AceHearts.suit}
      flipped={AceHearts.flipped}
      hidden={AceHearts.hidden}
    />
  );
  const aceDiamonds = (
    <PlayingCard
      rank={AceDiamonds.rank}
      suit={AceDiamonds.suit}
      flipped={AceDiamonds.flipped}
      hidden={AceDiamonds.hidden}
    />
  );
  const aceSpades = (
    <PlayingCard
      rank={AceSpades.rank}
      suit={AceSpades.suit}
      flipped={AceSpades.flipped}
      hidden={AceSpades.hidden}
    />
  );
  const aceClubs = (
    <PlayingCard
      rank={AceClubs.rank}
      suit={AceClubs.suit}
      flipped={AceClubs.flipped}
      hidden={AceClubs.hidden}
    />
  );

  

  
  return (
    <Container>
      <Winner>
        <h1>Winner</h1>
      </Winner>
      <CardRowContainer>
        <CardRow color={"#6bd199"} />
        <CardRow color={"#85cca7"} />
        <CardRow color={"#9ec7b3"} />
        <CardRow color={"#b1cfcb"} />
        <CardRow color={"#cfdde1"} />
        <CardRow color={"#ffffff"} />
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
