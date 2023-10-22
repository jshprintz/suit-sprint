import React, { Component } from "react";
import styled from "styled-components";

interface CardDisplayProps {
  rank: string;
  suit: string;
  flipped: boolean;
  hidden: boolean;
}

const CardDisplay = (props: CardDisplayProps): React.JSX.Element => {
  const { rank, suit, flipped, hidden } = props;

  return (
    <Container>
      <Card>
        <span>{rank}</span>
        <span>{suit}</span>
      </Card>
    </Container>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  border-radius: 5px;

  height: 80%;
  width: 50%;

  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export default CardDisplay;
