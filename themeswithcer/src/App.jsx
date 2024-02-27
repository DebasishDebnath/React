import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Cad";

export default function App() {
  const [thememMode, setThememMode] = useState("light");

  const lightTheme = () => {
    setThememMode("light");
  };

  const darkTheme = () => {
    setThememMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememMode);
  }, [thememMode]);

  return (
    <ThemeProvider value={{ thememMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
