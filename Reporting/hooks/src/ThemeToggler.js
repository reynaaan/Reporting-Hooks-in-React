import React, { useContext } from 'react';
import { ThemeContext } from './useContext';

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        fontSize: 24,
        padding: 100,
        borderRadius: 5,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggler;
