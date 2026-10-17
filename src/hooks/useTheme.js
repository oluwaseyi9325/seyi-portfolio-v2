import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// The initial class is set by the inline script in _document.js (dark unless the
// visitor chose light). This reads it back and lets the visitor flip and save it.
const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
};

export default useTheme;
