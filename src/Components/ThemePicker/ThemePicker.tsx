import React from "react";
import { Theme, themes } from "../../misc/themes";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { Select } from "flowbite-react";

export default function ThemePicker() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return (
    <Select
      data-testid="select-сontainer"
      value={currentTheme}
      onChange={(e) => {
        const target = e.target.value as Theme;
        setCurrentTheme(target);
      }}
    >
      {themes.map((theme) => (
        <option key={theme}>{theme}</option>
      ))}
    </Select>
  );
}
