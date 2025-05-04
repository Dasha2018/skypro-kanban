import React, { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext.jsx";
import "./Header.styled.js";
import UserProfile from "../popups/PopUser/PopUser.jsx";

import {
  HeaderContainer,
  ContainerH,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtn,
} from "./Header.styled.js";

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <HeaderContainer $themeMode={theme}>
      <ContainerH>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img
                src={
                  theme === "dark" ? "images/logo_dark.png" : "images/logo.png"
                }
                alt="logo"
              />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtn >
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtn>
            <UserProfile />
          </HeaderNav>
        </HeaderBlock>
      </ContainerH>
    </HeaderContainer>
  );
}
export default Header;
