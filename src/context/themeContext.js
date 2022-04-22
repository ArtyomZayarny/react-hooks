import React, { useState } from 'react';

// 0 Create context
// 1 Create values
// 2 Wrapped into provider and pased value
// 3 fetch from context

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const updateTheme = () => {
    return setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
