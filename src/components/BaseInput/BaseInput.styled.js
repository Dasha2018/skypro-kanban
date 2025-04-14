import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
`;

export const StyledInput = styled.input`
  width: 248px;
  height: 30px;
  border-radius: 8px;
  border-width: 0.7px;
  padding-top: 8px;
  padding-right: 10px;
  padding-bottom: 8px;
  padding-left: 10px;
  gap: 10px;

  border: 1px solid ${(props) => (props.$error ? "red" : "#ccc")};  

  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${(props) => (props.$error ? "red" : "#007bff")};
  }
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
