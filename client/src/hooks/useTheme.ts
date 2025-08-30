import { useContext } from "react";

import { ThemeProviderContext } from "@/context/ThemeProviderContext.ts";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
