import { createContext, useContext, useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

const themeContext = createContext();

export const useThemeContext = () => {
  return useContext(themeContext);
};

export const ThemeProvider = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode);

  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);

  const toggleTheme = () => {
    toggleColorMode();
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
