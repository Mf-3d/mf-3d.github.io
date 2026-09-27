"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ReactSVG } from "react-svg";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // クライアントサイドレンダリングを保証
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;


  if (resolvedTheme === "dark") {
    return <ReactSVG src="/images/logo_dark.svg"
      beforeInjection={(svg) => {
        svg.classList.add('w-1/3');
      }}
      />;
  } else return <ReactSVG src="/images/logo_light.svg"
      beforeInjection={(svg) => {
        svg.classList.add('w-1/3');
      }}
      />;
};

export default Logo;