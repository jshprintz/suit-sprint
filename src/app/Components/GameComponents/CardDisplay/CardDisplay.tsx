import React, { Component } from "react";
import styled from "styled-components";
import Image from "next/image";

interface CardDisplayProps {
  rank: string;
  suit: string;
  flipped: boolean;
  hidden: boolean;
}

const CardDisplay = (props: CardDisplayProps): React.JSX.Element => {
  const { rank, suit, flipped, hidden } = props;
  // Spades = ♠
  // Hearts = ♥
  // Diamonds = ♦
  // Clubs = ♣

  const cardBack = (
    <Image src="/cardBack.png" alt="card back" width={100} height={150} />
  );

  const getSuit = (suit: string): string => {
    switch (suit) {
      case "Spades":
        return "♠";
      case "Hearts":
        return "♥";
      case "Diamonds":
        return "♦";
      case "Clubs":
        return "♣";
      default:
        return "";
    }
  };

  const suitIcon = getSuit(suit);
  const color: string = suit === "Spades" || suit === "Clubs" ? "black" : "red";

  return (
    <Container>
      <Card color={color}>
        {flipped ? (
          <Image
            src="/assets/images/cardBack.png"
            alt="card back"
            width={70}
            height={80}
          />
        ) : (
          <>
            <CardContent style={{ transform: "translateY(5px)" }}>
              {rank}
            </CardContent>
            <CardContent style={{ transform: "translateY(-5px)" }}>
              {suitIcon}
            </CardContent>
          </>
        )}
      </Card>
    </Container>
  );
};

const CardContent = styled.span`
  margin: 0;
  padding: 0;
`;

const Card = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid black;
  border-radius: 5px;

  height: 80%;
  width: 50%;

  color: ${(p) => p.color};
  font-size: 2rem;

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
