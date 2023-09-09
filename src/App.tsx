import "./index.css";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/app1/App1";
import Page2 from "./pages/app2/App2";
import Home from "./pages/home/home";
import { Theme, ThemeContextType, defaultTheme, getCurrentCssTheme, isCssThemeExits, setCssTheme } from "./misc/themes";

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
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />}></Route>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
