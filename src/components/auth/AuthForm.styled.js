import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalWindowStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const WrapperWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 368px;
  height: auto;

  border-radius: 10px;
  border-width: 0.7px;
  padding-top: 50px;
  padding-right: 60px;
  padding-bottom: 50px;
  padding-left: 60px;
  gap: 10px;
  background: ${({ theme }) => theme.cardBackground};
  border: 0.7px solid #d4dbe5 box-shadow 0px 4px 67px -12px #00000021;
`;

export const WrapperWindowTitle = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -3%;
  text-align: center;
  color: ${({ theme }) => theme.textColor};
`;

export const InputStart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const BaseButton = styled.button`
  width: 248px;
  height: 30px;
  border-radius: 4px;
  margin-top: 20px;
  background-color: #565eef;
  border: none;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  padding: 8px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormGroupStart = styled.div`
  margin-top: 20px;

  height: 42px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -1%;
  color: #94a6be66;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  height: 42px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: -1%;
  color: #94a6be66;
  display: flex;
  text-align: center;
  flex-direction: column;

  text-decoration: underline;

  &:hover {
    color: #000000;
  }
`;
