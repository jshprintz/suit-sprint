import React, { Component } from "react";
import styled from "styled-components";
import Image from "next/image";
import { ICardDisplayProps } from "../../types/interfaces";

const CardDisplay = (props: ICardDisplayProps): React.JSX.Element => {
  const { rank, suit, flipped } = props;
  // Spades = ♠
  // Hearts = ♥
  // Diamonds = ♦
  // Clubs = ♣
  const color: string = suit === "♣" || suit === "♠" ? "black" : "red";

  return (
    <Container>
      <Card color={color}>
        {/* Show back of the card */}
        {flipped ? (
          <Image
            src="/assets/images/cardBack.png"
            alt="card back"
            width={70}
            height={80}
          />
        ) : (
          // Show front of the card
          <>
            <CardContent style={{ transform: "translateY(5px)" }}>
              {rank}
            </CardContent>
            <CardContent style={{ transform: "translateY(-5px)" }}>
              {suit}
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
