export enum Themes {
  PrincessPink = "PrincessPink",
  OrangeDanger = "OrangeDanger",
  NextJsExample = "NextJsExample",
}
export function setCssTheme(theme: Themes) {
  localStorage.setItem("data-theme", JSON.stringify(theme));
  document.documentElement.setAttribute("data-theme", theme);
}
export function getCurrentCssTheme() {
  let localStorageTheme = localStorage.getItem("data-theme");
  const storageIsEmpty = localStorageTheme == null || localStorageTheme == undefined || localStorageTheme == "";
  if (storageIsEmpty) {
    setCssTheme(defaultTheme);
  }
  return !storageIsEmpty ? JSON.parse(localStorageTheme as string) : defaultTheme;
}

export const defaultTheme: Themes = Themes.PrincessPink;
