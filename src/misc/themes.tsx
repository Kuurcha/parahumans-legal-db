export enum Themes {
  PrincessPink = "PrincessPink",
  OrangeDanger = "OrangeDanger",
  NextJsExample = "NextJsExample",
}
export function setCssTheme(theme: Themes) {
  document.documentElement.setAttribute("data-theme", theme);
  console.log("theme set to: " + document.documentElement.getAttribute("data-theme"));
}

export const defaultTheme: Themes = Themes.PrincessPink;
