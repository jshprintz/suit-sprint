import React from "react";
import styled from "styled-components";

interface CardRowProps {
  color: string;
}

const CardRow = ({ color }: CardRowProps): React.JSX.Element => {
  return (
    <Container color={color}>
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer color="white"/>
    </Container>
  );
};

const CardContainer = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 2px solid black;

  height: 100%;
  width: 20%;

  background-color: ${(p) => p.color || "transparent"};
`;

const Container = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border: 2px solid black;

  height: 16.6667%;
  width: 100%;

  background-color: ${(p) => p.color};
`;

export default CardRow;
