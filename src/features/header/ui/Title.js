import React from "react";
import styled from "styled-components";
import logo from "./assets/logo_fitnext_green_black.svg";

const TitleWrapper = styled.h1`
  z-index: 2;
  height: 5rem;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = ({ ...props }) => (
  <TitleWrapper>
    <img src={logo} alt="fitnext logo" />
  </TitleWrapper>
);
