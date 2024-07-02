"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const date = new Date();
    const offset = 7 * 60; // Thailand is UTC+7
    const localTime = date.getTime();
    const utcTime = localTime + date.getTimezoneOffset() * 60 * 1000;
    const thailandTime = new Date(utcTime + offset * 60 * 1000);

    const hour = thailandTime.getHours();
    const theme = hour >= 6 && hour < 18 ? "light" : "dark";

    document.documentElement.classList.add(theme);
  }, []);

  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
