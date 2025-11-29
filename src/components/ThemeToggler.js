import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ThemeToggler() {
  const { theme, setTheme } = useContext(UserContext);

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="card">
      <h3>🎨 Theme Controller</h3>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

