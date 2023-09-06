export const themes = ["PrincessPink", "OrangeDanger", "NextJsExample"] as const;
export type Theme = (typeof themes)[number];

export function setCssTheme(theme: Theme): void {
  localStorage.setItem("data-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}

export function getCurrentCssTheme(): Theme {
  const localStorageTheme = localStorage.getItem("data-theme") as Theme | null;
  const resultTheme = localStorageTheme || defaultTheme;
  document.documentElement.setAttribute("data-theme", resultTheme);
  return resultTheme;
}

export type ThemeContextType = {
  currentTheme: Theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const defaultTheme: Theme = "PrincessPink";
