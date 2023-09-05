import { Themes } from "./themes";

export type ThemeContextType = {
  currentTheme: Themes;
  setCurrentTheme: React.Dispatch<React.SetStateAction<Themes>>;
};
