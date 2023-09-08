import React from "react";

import { getByTestId, render, screen } from "@testing-library/react";
import ThemePicker from "./ThemePicker";

describe("Theme picker component", () => {
  it("should render with themes", () => {
    const themePickerComponent = render(<ThemePicker />);
    const select = themePickerComponent.getByTestId("select-сontainer");

    console.log("сhildren: " + select.children);
  });
});
