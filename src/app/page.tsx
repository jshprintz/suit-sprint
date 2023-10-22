"use client";
import React from "react";
import styled from "styled-components";
import GamePage from "./Components/GamePage";

export default function Home() {
  return (
    <Container>
      <h1>Suit Sprint</h1>
      <GamePage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
  height: 95vh;
`;
