"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Modal from "react-modal";

import { Card } from "@/types/card";
import cards from "../../public/card.json";
import MainVisual from "@/components/common/main-visual";
import { LuX } from "react-icons/lu";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  // クライアントサイドレンダリングを保証
  useEffect(() => setMounted(true), []);
  const { resolvedTheme } = useTheme();
  const [modalIsOpen, setIsOpen] = useState(false);

  const [cardInfo, setCardInfo] = useState(
    {
      title: "(╯•⌓•╰)",
      contents: []
    } as Card
  );

  Modal.setAppElement("div");

  return (
    <main className="mt-9">
      <MainVisual />
      <h1>🗂️ Works</h1>
      <div className="flex justify-center">
        <Marquee pauseOnHover={true} speed={60} gradient={true} gradientColor={resolvedTheme === "light" ? "white" : "rgb(10,10,10)"} className="flex">
          {cards.map((card: Card, index) => {
            return (
              <div key={index} className="card rounded-lg" onClick={() => {
                setCardInfo(card);
                setIsOpen(true);
              }}>
                <div className="card__imgframe rounded-tl-lg rounded-tr-lg" style={{ backgroundImage: (card.image ? `url(${card.image})` : "") }}></div>
                <div className="card__textbox rounded-bl-lg rounded-br-lg">
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={{
            overlay: {
              zIndex: 100,
              backgroundColor: "#000a"
            },
            content: {
              width: "50%",
              position: "absolute",
              top: "5rem",
              left: "25%",
              right: "25%",
              bottom: "25%",
              padding: "1rem"
            },
          }}
          className="bg-neutral-100 dark:bg-neutral-900 border-solid border-1 rounded-md border-neutral-300 dark:border-neutral-700"
        >
          <button onClick={() => setIsOpen(false)}><LuX/></button>
          <h1>{cardInfo.title}</h1>
        </Modal>
      </div>
    </main>
  );
}