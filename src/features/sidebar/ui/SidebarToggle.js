import React from "react";
import styled from "styled-components";
import ToggleImage from "../assets/menu-hamburger.svg";

const SidebarToggleButton = styled.button`
  flex: 0 0 auto;
  background: 0 0;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: 0;
  z-index: 2;
  margin: 0 1rem 0 0;

  @media (min-width: 768px) {
    margin: 0 2rem 0 0;
  }
`;

const SidebarToggleImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const SidebarToggle = ({ onToggle }) => (
  <SidebarToggleButton onClick={onToggle}>
    <SidebarToggleImg src={ToggleImage} />
  </SidebarToggleButton>
);
