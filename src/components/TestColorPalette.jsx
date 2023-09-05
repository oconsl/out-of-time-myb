"use client";
import { useThemeStore } from "@/store/useColorTheme";

function TestColorPalette() {
  const { theme } = useThemeStore();


  return (
    <div className={`${theme}`}>
      <h1 className={`font-2xl  `}>
        Este es un componente de prueba. El tema actual es: {theme}
      </h1>
    </div>
  );
}

export default TestColorPalette;
