export const applySystemTheme = (theme: string) => {
  const updateTheme = () => {
    if (theme === "system") {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  updateTheme();

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleChange = (e: MediaQueryListEvent) => {
    if (theme === "system") {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
};

export const themeClasses: Record<string, string> = {
  light: "bg-background text-foreground",
  dark: "dark bg-background text-foreground",
  minimal: "bg-muted text-muted-foreground",
  system: "bg-background text-foreground dark:bg-background dark:text-foreground"
};

export const getThemeClass = (theme: string): string => {
  return themeClasses[theme] || themeClasses.system;
};
