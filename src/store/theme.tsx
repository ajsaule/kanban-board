import { createContext, useCallback, useEffect, useState } from "react";

type ThemeType = {
  isDark: boolean;
  toggleTheme: () => void;
  setIsDarkTheme: (theme: boolean) => void;
};

const ThemeContext = createContext<ThemeType>({
  isDark: false,
  toggleTheme: () => {},
  setIsDarkTheme: (theme: boolean) => {},
});

type PropsType = { children: React.ReactNode };

export const ThemeProvider = ({ children }: PropsType) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const setIsDarkTheme = useCallback((isDark: boolean) => {
    setIsDark(isDark);
  }, []);

  // SETTING THEMES ACCORDING TO DEVICE
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkTheme(true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDarkTheme(event.matches);
      });
  }, [setIsDarkTheme]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        setIsDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
