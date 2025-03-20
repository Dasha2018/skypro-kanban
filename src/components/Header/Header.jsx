import React from "react";

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
  return (
    <HeaderContainer>
      <ContainerH>
        <HeaderBlock>
          <HeaderLogo HeaderLogo className="_light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtn className="_hover01" id="btnMainNew">
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
