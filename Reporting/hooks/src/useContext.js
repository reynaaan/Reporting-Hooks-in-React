import React, { createContext, useState } from 'react';

const initialTheme = {
  background: 'white',
  foreground: 'black'
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      background: prevTheme.background === 'white' ? 'black' : 'white',
      foreground: prevTheme.foreground === 'black' ? 'pink' : 'black'
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
