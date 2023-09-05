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
  const localStorageTheme = localStorage.getItem("data-theme");
  const storageIsEmpty = localStorageTheme == null || localStorageTheme == undefined || localStorageTheme == "";
  const resultTheme = !storageIsEmpty ? JSON.parse(localStorageTheme as string) : defaultTheme;
  document.documentElement.setAttribute("data-theme", resultTheme);
  if (storageIsEmpty) {
    setCssTheme(defaultTheme);
  }
  return resultTheme;
}

export const defaultTheme: Themes = Themes.PrincessPink;
