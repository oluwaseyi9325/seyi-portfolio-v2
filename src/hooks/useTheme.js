import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null; // Storage can be blocked (private mode).
  }
};

const apply = (theme) => document.documentElement.classList.toggle("dark", theme === "dark");

// The initial class is set by the inline script in _document.js. Until the visitor
// picks a theme themselves, this keeps following their device's light/dark setting.
const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onDeviceChange = (event) => {
      if (readStored()) return;
      const next = event.matches ? "dark" : "light";
      apply(next);
      setTheme(next);
    };
    media.addEventListener("change", onDeviceChange);
    return () => media.removeEventListener("change", onDeviceChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // The toggle still works for this visit.
    }
    setTheme(next);
  };

  return { theme, toggleTheme };
};

export default useTheme;
