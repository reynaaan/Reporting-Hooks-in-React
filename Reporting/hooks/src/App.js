//useImperativeHandle
import React, { useRef } from 'react';
import CustomInput from './useImperativeHandle';

function App() {
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Custom Input Component</h1>
      <CustomInput ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}

export default App;
