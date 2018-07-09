import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  z-index: 2;
  background-color: #f0f0f0;
  transition: transform 0.2s ease-in;

  @media (min-width: 768px) {
    transform: ${props.sideBarIsOpen ? "translateX(28rem)" : "unset"};
  }

  border-left: ${props.sideBarIsOpen ? "solid 1px #717171" : ""};
`;
