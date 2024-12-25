import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme, GlobalStyles } from "@/styles/theme";

function Layout({ children }) {
  const colorTheme = "dark";
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(function () {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ThemeProvider theme={colorTheme === "dark" ? DarkTheme : LightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
