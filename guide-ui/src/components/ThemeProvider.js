import React, { useEffect } from "react";
import { theme } from "../config/theme";

function ThemeProvider({ children }) {
  useEffect(() => {
    // Convert theme to CSS variables
    const root = document.documentElement;

    // Colors
    Object.entries(theme.colors).forEach(([category, values]) => {
      Object.entries(values).forEach(([key, value]) => {
        root.style.setProperty(`--${category}-${key}`, value);
      });
    });

    // Spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Border Radius
    Object.entries(theme.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // Shadows
    Object.entries(theme.shadows).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });
  }, []);

  return <>{children}</>;
}

export default ThemeProvider;
