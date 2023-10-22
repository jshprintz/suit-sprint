import React, { Component } from "react";
import styled from "styled-components";

interface PlayingCardProps {
  rank: string;
  suit: string;
  flipped: boolean;
  hidden: boolean;
}

interface PlayingCardState {
  Rank: string;
  Suit: string;
  Flipped: boolean;
  Hidden: boolean;
}

class PlayingCard extends Component<PlayingCardProps, PlayingCardState> {
  constructor(props: PlayingCardProps) {
    super(props);
    this.state = {
      Rank: props.rank,
      Suit: props.suit,
      Flipped: props.flipped,
      Hidden: props.hidden,
    };
  }

  render() {
    const { Rank, Suit, Flipped, Hidden } = this.state;

    return (
      <Container hidden={Hidden}>
        <Card>
          <span>{Rank}</span>
          <span>{Suit}</span>
        </Card>
      </Container>
    );
  }
}

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

const Container = styled.div<{ hidden: boolean }>`
  display: ${(p) => (p.hidden ? "none" : "flex")};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export default PlayingCard;
