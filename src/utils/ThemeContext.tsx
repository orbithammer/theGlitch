import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  toggleTheme: () => {},
});

export default ThemeContext