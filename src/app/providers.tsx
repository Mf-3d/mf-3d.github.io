"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider attribute="class" defaultTheme="system">{children}</ThemeProvider>;
};

export default Providers;