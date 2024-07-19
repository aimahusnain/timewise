"use client";

import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button aria-label="ThemeToggler" className="px-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {
        theme === 'dark' ? <p>Moon</p> : <p>Sun</p>
      }
    </button>
  );
}