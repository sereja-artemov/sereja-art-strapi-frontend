'use client'

import React, { useState, useContext, useEffect, createContext } from "react";

export interface DarkModeContextType {
  isDarkMode: boolean;
  changeDarkMode(value: any): void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setDarkMode] = useState(true);

  function updateTheme() {
    const currentTheme = localStorage.getItem("isDarkMode") || "true";
    if (currentTheme === "true") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }

  useEffect(() => {
    updateTheme();
  }, []);
  
  function changeDarkMode(value: any) {
    localStorage.setItem("isDarkMode", value);
    updateTheme();
  }

  const contextValue: DarkModeContextType = {
    isDarkMode,
    changeDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  return context!;
};