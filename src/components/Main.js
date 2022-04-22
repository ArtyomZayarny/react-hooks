import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { Button } from './Button';

export const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`main ${theme ? 'theme' : 'darkTheme'}`}>
      <div>Main</div>
      <Button />
    </div>
  );
};
