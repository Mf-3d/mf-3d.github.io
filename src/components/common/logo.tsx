"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import LogoDark from "../../../public/images/logo_dark.svg";
import LogoLight from "../../../public/images/logo_light.svg";

const Logo = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // クライアントサイドレンダリングを保証
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  

  if(resolvedTheme === 'dark') {
    return <LogoDark className="w-1/3" />;
  } else return <LogoLight className="w-1/3" />;
};

export default Logo;