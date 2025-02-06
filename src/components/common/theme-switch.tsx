"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun, LuMonitor } from "react-icons/lu";

import { Tooltip } from "./Tooltip";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => {
      // light → dark → system
      theme === "light" ? setTheme("dark") : (theme === "dark" ? setTheme("system") : setTheme("light"))
    }}>
      {theme === "light" ? 
        <Tooltip tooltipText="ライトモード">
          <LuSun className="fill-orange-600 stroke-orange-600" />
        </Tooltip> : (
          theme === "dark" ? 
          <Tooltip tooltipText="ダークモード">
            <LuMoon className="fill-amber-300 stroke-amber-300" />
          </Tooltip> : 
          <Tooltip tooltipText="システムに従う">
            <LuMonitor />
          </Tooltip>
        )
      }
    </button>
  );
};