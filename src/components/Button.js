import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

export const Button = () => {
  const { updateTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={updateTheme}>Toggle</button>
    </>
  );
};
