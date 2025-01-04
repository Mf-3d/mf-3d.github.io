"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun, FaDisplay } from "react-icons/fa6";

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
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="border-2 border-neutral-100 dark:border-neutral-900"
    >
      <option value="system"><FaDisplay /></option>
      <option value="dark"><FaMoon /></option>
      <option value="light"><FaSun /></option>
    </select>
  );
};