import React from "react";
import styled from "styled-components";
import CardRow from "./CardRow/CardRow";

const GamePage: React.FC = () => {
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
