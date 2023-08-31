export enum Themes {
  PrincessPink = "PrincessPink",
  OrangeDanger = "OrangeDanger",
  NextJsExample = "NextJsExample",
}
export function setCssTheme(theme: Themes) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("data-theme", JSON.stringify(theme));
}
export function getCurrentCssTheme() {
  let localStorageTheme = localStorage.getItem("data-theme");
  const storageIsNotEmpty = localStorageTheme !== null && localStorageTheme !== undefined && localStorageTheme !== "";
  console.log("getting from local storage: " + localStorageTheme + storageIsNotEmpty);
  if (storageIsNotEmpty) setCssTheme(defaultTheme);
  return storageIsNotEmpty ? JSON.parse(localStorageTheme as string) : defaultTheme;
}

export const defaultTheme: Themes = Themes.PrincessPink;
