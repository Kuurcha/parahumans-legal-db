import { fireEvent, render } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
describe("Sidebar component should", () => {
  it("Show all sidebar routes", () => {
    const sidebarComponent = render(<Sidebar />);
    const sidebarContainer = sidebarComponent.getByTestId("sidebar-сontainer");
    const sidebarButtons = sidebarContainer.querySelectorAll("Button");
    const sidebarLinks = sidebarContainer.querySelectorAll("Link");

    console.log("buttons");
    sidebarButtons.forEach((button) => {
      console.log(button.innerHTML);
    });

    console.log("links");

    sidebarLinks.forEach((link) => {
      console.log(link);
    });
  });

  it("Invoke redirect on sidebar button click", () => {
    const sidebarComponent = render(<Sidebar />);
  });
});
