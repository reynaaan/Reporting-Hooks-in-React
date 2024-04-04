import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import styled from 'styled-components

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return (
    <StyledCustomInputContainer>
      <StyledInput
        ref={inputRef}
        placeholder="Type something..."
      />
    </StyledCustomInputContainer>
  );
});

const StyledCustomInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Center vertically */
`;

const StyledInput = styled.input`
  width: 80%; /* 80% of container's width */
  height: 50px; /* Adjust height as needed */
  font-size: 18px; /* Adjust font size as needed */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

export default CustomInput;
