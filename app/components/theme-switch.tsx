"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";

const storageKey = 'theme-preference';

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

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Only run on client side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial client render, return a placeholder
  // This ensures server and client render the same content initially
  if (!mounted) {
    return (
      <div className="w-[14px] h-[14px]" /> // Empty placeholder with same dimensions
    );
  }

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <FaCircleHalfStroke
        className="h-[14px] w-[14px] text-[#1c1c1c] dark:text-white"
        aria-hidden="true"
      />
    </button>
  );
};