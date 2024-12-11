/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useState, useEffect } from 'react';


const ThemeContext = createContext();


export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
   
    return localStorage.getItem('theme') || 'light';
  });


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }


    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
