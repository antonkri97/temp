import React from "react";
import * as HeaderUI from "features/header/ui";
import { SidebarToggle } from "features/sidebar/ui";

export const Header = () => (
  <HeaderUI.Header>
    <SidebarToggle />
    <HeaderUI.Title />
    <HeaderUI.HeaderLinkWrapper>
      <HeaderUI.HeaderLink>Weight loss</HeaderUI.HeaderLink>
      <HeaderUI.HeaderLink>Body Weight</HeaderUI.HeaderLink>
      <HeaderUI.HeaderLink>Full Energy</HeaderUI.HeaderLink>
    </HeaderUI.HeaderLinkWrapper>
    <HeaderUI.LoginButton>Button login</HeaderUI.LoginButton>
  </HeaderUI.Header>
);
