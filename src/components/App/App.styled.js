/* import { createGlobalStyle } from "styled-components"; */
import styled from "styled-components";

/* const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }`;
export default GlobalStyles; */

export const AppLoadingMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 20px;
  padding: 200px 200px;
  border-radius: 50px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#151419" : theme.background};
  color: ${({ theme }) => theme.textColor};
`;

export const AppWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};
`;

export const PopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;

export const PopExitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const PopExitBlock = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;

  border: 0.7px solid rgba(148, 166, 190, 0.4);

  background: ${({ theme }) => theme.popBgColor};
  box-shadow: ${({ theme }) => theme.popBoxShadow};
`;

export const PopExitTtl = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.popNameColor};
  &h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export const PopExitForm = styled.form``;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const PopExitBtnYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #33399b;
  }
`;
export const PopExitBtnNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #565eef;

  a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const Main = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBackground};
`;
export const MainContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
`;
