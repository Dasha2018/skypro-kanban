import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;
export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  border-radius: 18px;
  display: contents;
`;

export const CardThemeTopic = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  padding: 5px 14px;
  border-radius: 18px;
  display: inline-block;
  margin: 0;

  background: ${({ $topic, theme }) =>
    $topic === "Web Design"
      ? theme.orangebackground
      : $topic === "Research"
      ? theme.greenbackground
      : theme.purplebackground};

  color: ${({ $topic, theme }) =>
    $topic === "Web Design"
      ? theme.orangecolor
      : $topic === "Research"
      ? theme.greencolor
      : theme.purplecolor};
`;

export const CardButton = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardBtn = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 10px;
`;
export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;

export const themeStyles = {
  "Web Design": {
    background: "#ffe4c2",
    color: "#ff6d00",
  },
  Research: {
    background: "#b4fdd1",
    color: "#06b16e",
  },
  Copywriting: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },
};
