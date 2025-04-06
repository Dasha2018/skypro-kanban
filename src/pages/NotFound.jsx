import styled from "styled-components";

const NotFoundPage = () => {
  return <ErrorNotFoundPage>Страница не найдена...</ErrorNotFoundPage>;
};

export default NotFoundPage;

const ErrorNotFoundPage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 20px;
  color: #333;
`;
