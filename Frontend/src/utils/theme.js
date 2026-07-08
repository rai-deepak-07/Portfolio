export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

const STORAGE_KEY = "portfolio-theme";

/**
 * Get saved theme
 */
export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY);
}

/**
 * Save theme
 */
export function setStoredTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

/**
 * Get current system theme
 */
export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEME.DARK
    : THEME.LIGHT;
}

/**
 * Apply theme to html
 */
export function applyTheme(theme) {
  const root = document.documentElement;

  root.classList.remove(THEME.LIGHT);
  root.classList.remove(THEME.DARK);

  if (theme === THEME.SYSTEM) {
    theme = getSystemTheme();
  }

  root.classList.add(theme);
}