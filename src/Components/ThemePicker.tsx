import React from "react";
import { Form } from "react-bootstrap";
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

  return (
    <Form.Select
      className="m-4 self-end"
      defaultValue={context?.currentTheme}
      onChange={(e) => {
        //TO DO: If the source code of the page is modified and incorrect value will be passed into here, will it break? How to handle this?
        context.setCurrentTheme(e.target.value as Themes);
        setCssTheme(context.currentTheme);
      }}
    >
      {themeOptions}
    </Form.Select>
  );
}
