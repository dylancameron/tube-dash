export const themeClasses: Record<string, string> = {
  light: "bg-background text-foreground",
  dark: "dark bg-background text-foreground",
  minimal: "bg-muted text-muted-foreground",
  system:
    "bg-background text-foreground dark:bg-background dark:text-foreground",
};

export const getThemeClass = (theme: string): string => {
  return themeClasses[theme] || themeClasses.system;
};
