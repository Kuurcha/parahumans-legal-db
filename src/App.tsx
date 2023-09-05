import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/app1/App1";
import Page2 from "./pages/app2/App2";
import Home from "./pages/home/home";
import { Themes, defaultTheme, getCurrentCssTheme, setCssTheme } from "./misc/themes";
import { ThemeContextType } from "./misc/themeContext";

export let ThemeContext: React.Context<ThemeContextType>;

function App() {
  const [theme, setTheme] = useState(getCurrentCssTheme());
  ThemeContext = createContext<ThemeContextType>({ currentTheme: theme, setCurrentTheme: setTheme });
  return (
    <div className="App">
      <ThemeContext.Provider value={{ currentTheme: theme, setCurrentTheme: setTheme }}>
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
