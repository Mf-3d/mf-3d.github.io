"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <main>
      <div className="flex justify-center">
        <Marquee pauseOnHover={true} speed={40} gradient={true} gradientColor={resolvedTheme === "light" ? "white" : "rgb(10,10,10)"}>
          <p>ここの文字がアニメーションします</p>
        </Marquee>
      </div>
    </main>
  );
}