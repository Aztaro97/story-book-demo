import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding:4rem;
  background-color: #FAEFE3;
`;
