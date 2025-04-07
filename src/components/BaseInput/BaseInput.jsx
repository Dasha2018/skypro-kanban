import React from "react";
import { InputWrapper, StyledInput, ErrorText } from "./BaseInput.styled.js";

const BaseInput = ({ error, type, name, id, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      <StyledInput
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $error={error}
      />
      {error && <ErrorText>Заполните поле</ErrorText>}
    </InputWrapper>
  );
};

export default BaseInput;