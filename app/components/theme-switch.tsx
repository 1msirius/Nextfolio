"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { FaCircleHalfStroke } from "react-icons/fa6";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? resolvedTheme : "dark"; // Default to 'dark' to avoid initial flicker

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? (
        <FaCircleHalfStroke className="h-[14px] w-[14px] text-[#D4D4D4]" />
      ) : (
        <FaCircleHalfStroke className="h-[14px] w-[14px] text-[#1c1c1c]" />
      )}
    </button>
  );
}
