"use client";

import dynamic from "next/dynamic";
import React from "react";

const ThemeProvider = dynamic(() => import("@/components/ThemeProvider"), {
  ssr: false,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
