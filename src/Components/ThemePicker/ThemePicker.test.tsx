import { fireEvent, render } from "@testing-library/react";
import ThemePicker from "./ThemePicker";
import { getCurrentCssTheme, themes } from "../../misc/themes";

describe("Theme picker component", () => {
  it("should render with themes with equal count and content to theme list", () => {
    const themePickerComponent = render(<ThemePicker />);
    const select = themePickerComponent.getByTestId("select-сontainer");
    const selectChilren = select.querySelectorAll("option");

    expect(selectChilren.length).toBe(themes.length);
    selectChilren.forEach((option) => {
      expect(themes).toContain(option.innerHTML);
    });
  });
  it("should change theme in document attributes and local storage after selecting new option", () => {
    const themePickerComponent = render(<ThemePicker />);
    const select = themePickerComponent.getByTestId("select-сontainer");

    const newTheme = themes[1];

    const previousTheme = getCurrentCssTheme();
    fireEvent.change(select, { target: { value: newTheme } });

    expect(previousTheme).not.toBe(getCurrentCssTheme());
    expect(newTheme).toBe(getCurrentCssTheme());
  });
});
