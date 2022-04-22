import React, { useEffect } from 'react';

export const AppTest = () => {
  useEffect(() => {
    console.log('AppTest');
  }, []);
  return <div>AppTest</div>;
};
