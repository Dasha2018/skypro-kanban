import styled from "styled-components";

export const PopBrowseCnt = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  &:target {
    display: block;
  }
`;
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cardBackground};;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ theme }) => theme.popBgColor};
  box-shadow: ${({ theme }) => theme.popBoxShadow};
  position: relative;
`;
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  &.categories__theme {
    opacity: 1;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;
export const PopBrowseTtl = styled.h3`
  color:  ${({ theme }) => theme.textColor};;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;
export const StatusP = styled.p`
  margin-bottom: 14px;
  & .SubTtl {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
export const PopBbrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;
export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.background};;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  color: ${({ theme }) => theme.textColor};
  height: 200px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;
export const PopBrowseThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
`;
export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
`;
export const PopBrowseBtnGroup = styled.div`
  gap: 8px;
`;
export const PopBrowseBtnEdit = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  margin-right: 8px;


  & a {
    color: #565eef;
  }
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const PopBrowseBtnDelete = styled(PopBrowseBtnEdit)``;



export const BtnBrowseCloseEdit = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  margin-right: 8px;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #33399b;
  }
`;


