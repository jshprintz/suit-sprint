import React from "react";
import styled from "styled-components";
import PlayingCard from "../PlayingCard/PlayingCard";

interface CardContainerProps {
  color?: string;
}

const CardContainer = ({ color }: CardContainerProps): React.JSX.Element => {
  return <Container color={color}></Container>;
};

const Container = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid black;

  height: 100%;
  width: 20%;

  background-color: ${(p) => p.color || "transparent"};
`;

export default CardContainer;
