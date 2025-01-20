"use client";

import React, { useEffect } from "react";
import { theme } from "@/config/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  useEffect(() => {
    const root = document.documentElement;

    // Colors
    Object.entries(theme.colors).forEach(([category, values]) => {
      Object.entries(values as Record<string, string>).forEach(
        ([key, value]) => {
          root.style.setProperty(`--${category}-${key}`, value);
        }
      );
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
