import "./index.css";
import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Page1 from "./pages/app1/App1";
import Page2 from "./pages/app2/App2";
import Home from "./pages/home/home";
import { Themes, defaultTheme, getCurrentCssTheme, setCssTheme } from "./misc/themes";
import { ThemeContextType } from "./misc/themeContext";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export let ThemeContext: React.Context<ThemeContextType>;

function App() {
  const [theme, setTheme] = useState(getCurrentCssTheme());
  ThemeContext = createContext<ThemeContextType>({ currentTheme: theme, setCurrentTheme: setTheme });
  return (
    <div className="h-full">
      {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map((variant) => (
        <DropdownButton as={ButtonGroup} key={variant} id={`dropdown-variants-${variant}`} variant={variant.toLowerCase()} title={variant}>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
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
