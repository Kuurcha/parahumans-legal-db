import "./index.css";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Theme, ThemeContextType, defaultTheme, getCurrentCssTheme, isCssThemeExits, setCssTheme } from "./misc/themes";
import AppRouter from "./Components/Router/Router";

const noop = () => {};

export const ThemeContext = createContext<ThemeContextType>({ currentTheme: defaultTheme, setCurrentTheme: noop });

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(getCurrentCssTheme());

  useEffect(() => {
    if (isCssThemeExits()) {
      setCssTheme(defaultTheme);
      setCurrentTheme(defaultTheme);
    }
  }, [currentTheme]);

  return (
    <div className="h-full">
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
        <AppRouter />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
