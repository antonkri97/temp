import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 85%;
  min-height: 100vh;
  overflow: scroll;
  position: absolute;
  z-index: 1;
  top: 0;
  transform: translateX(-100%);
  transition: transform 0.2s ease-in;
  color: #333;
  background-color: #e2e2e2;
`;
