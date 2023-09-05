import React from "react";
import { Themes, defaultTheme, setCssTheme } from "../misc/themes";
import { useContext } from "react";
import { ThemeContext } from "../App";

const themeOptions = Object.values(Themes).map((theme) => (
  <option value={theme} key={theme}>
    {theme}
  </option>
));

export default function ThemePicker() {
  const context = useContext(ThemeContext);
  console.log("selected theme is: " + context?.currentTheme);
  return (
    <div></div>
    // <Form.Select
    //   className="m-4 self-end"
    //   defaultValue={context?.currentTheme}
    //   onChange={(e) => {
    //     const selectedTheme = e.target.value as Themes;
    //     //TO DO: If the source code of the page is modified and incorrect value will be passed into here, will it break? How to handle this?
    //     context.setCurrentTheme(selectedTheme);
    //     setCssTheme(selectedTheme);
    //   }}
    // >
    //   {themeOptions}
    // </Form.Select>
  );
}
