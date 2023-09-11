import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { BrowserRouter, Router } from "react-router-dom";
import AppRouter, { sidebarItems } from "../Router/Router";
import { title } from "process";
import userEvent from "@testing-library/user-event";

describe("Sidebar component should", () => {
  const titleSidebarArray: string[] = sidebarItems.map((item) => {
    return item.title;
  });

  function valueIsInSidebarRouteList(value: Element) {
    const elementText = value.textContent ? value.textContent : "";
    return titleSidebarArray.includes(elementText);
  }

  function getSidebarButtons() {}
  it("Show all sidebar routes", () => {
    const sidebarComponent = render(<Sidebar />, { wrapper: BrowserRouter });
    const sidebarContainer = sidebarComponent.getByTestId("sidebar-сontainer");
    const sidebarButtons = Array.from(sidebarContainer.querySelectorAll("Button"));

    expect(sidebarButtons.every(valueIsInSidebarRouteList)).toBeTruthy();
  });

  it("Invoke redirect on sidebar button click", async () => {
    const user = userEvent.setup();
    const sidebarComponent = render(
      <BrowserRouter>
        <AppRouter />
        <Sidebar />
      </BrowserRouter>
    );

    const allButtons = sidebarComponent.getAllByRole("link");
    let aboutButton: HTMLElement = allButtons[0];
    allButtons.forEach((element) => {
      if (element.firstChild?.firstChild?.textContent == "About") {
        aboutButton = element;
      }
    });

    await user.click(aboutButton);

    expect(screen.getByText("This is about page")).toBeInTheDocument();
  });
});
