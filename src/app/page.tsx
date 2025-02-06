"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";

import { Card } from "@/types/card";
import cards from "../../public/card.json";
import MainVisual from '@/components/common/main-visual';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  // クライアントサイドレンダリングを保証
  useEffect(() => setMounted(true), []);
  const { resolvedTheme } = useTheme();

  return (
    <main className="mt-9">
      <MainVisual/>
      {/* <div className="flex justify-center mb-9">
        <div className="card-window bg-slate-50 dark:bg-slate-900 border-2" style={{
          width: "350px",
          height: "300px"
        }}>
          <div className="card-window__titlebar bg-slate-200 dark:bg-slate-800">
            <div className="buttons">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div> */}
      <h1 className="text-center border-b-2 border-slate-100 dark:border-slate-900">🗂️ Works</h1>
      <div className="flex justify-center">
        <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor={resolvedTheme === "light" ? "white" : "rgb(10,10,10)"} className="flex">
          {cards.map((card: Card) => {
            return (
              <div className="card card-skin rounded-lg">
                <div className="card__imgframe rounded-tl-lg rounded-tr-lg" style={{ backgroundImage: (card.image ? `url(${card.image})` : "") }}></div>
                <div className="card__textbox bg-neutral-100 dark:bg-neutral-900 rounded-bl-lg rounded-br-lg">
                  <div className="card__titletext truncate">
                    {card.title}
                  </div>
                  <div className="card__overviewtext truncate">
                    {card.description ? card.description : (<span className="italic text-neutral-500 dark:text-neutral-400">このカードには説明がありません。</span>)}
                  </div>
                </div>
              </div>
            );
        })}
        </Marquee>
      </div>
    </main>
  );
}