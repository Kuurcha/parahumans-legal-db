import React from "react";

import { getByTestId, render, screen } from "@testing-library/react";
import ThemePicker from "./ThemePicker";
import { themes } from "../../misc/themes";

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
});
