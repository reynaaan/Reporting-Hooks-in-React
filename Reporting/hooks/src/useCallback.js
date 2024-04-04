import React from 'react';

const MemoizedButton = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default MemoizedButton;
