"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import Link from "next/link";


import { Card } from "@/types/card";
import cards from "../../public/card.json";
import MainVisual from "@/components/common/main-visual";
import { LuExternalLink, LuLink2 } from "react-icons/lu";

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

  return (
    <main className="mt-9">
      <MainVisual />
      <h1>🗂️ Works</h1>
      <div className="flex justify-center">
        <Marquee speed={60} gradient={true} gradientColor={resolvedTheme === "light" ? "white" : "rgb(10,10,10)"} className="flex">
          {cards.map((card: Card, index) => {
            return (
              <div key={index} className="card rounded-lg cursor-pointer" onClick={() => {
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
          closeTimeoutMS={300}
          style={{
            overlay: {
              zIndex: 100,
              backgroundColor: "#000a",
              transition: 'opacity .3s ease-in-out',
              display: "flex",
              justifyContent: "center"
            },
            content: {
              minWidth: "35vw",
              maxWidth: "90vw",
              minHeight: "40%",
              height: "max-content",
              position: "absolute",
              top: "20%",
              outline: "none",
            },
          }}
          className="text-center border-2 border-slate-300 dark:border-slate-800 card-window bg-slate-50 dark:bg-slate-900"
        >
          <div className="card-window__titlebar bg-slate-200 dark:bg-slate-800">
            <div className="buttons">
              <div onClick={() => setIsOpen(false)}></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="card-window__imgframe" style={{ backgroundImage: (cardInfo.image ? `url(${cardInfo.image})` : "") }}></div>
          <div className="p-9">
            <h2 className="p-0">{cardInfo.title}</h2>
            <hr/>
            {cardInfo.contents.map((content, index) => {
              switch (content.type) {
                case "link":
                  return (
                    <p className="text-left p-2">
                      <h3 className="p-0">&#x1f517; Links</h3>
                      <ul>
                        {
                          content.links?.map((link) => {
                            switch (link.title.toLowerCase()) {
                              case "youtube":
                                return (
                                  <li>
                                    <Link href={link.url}>
                                      <FaYoutube className="inline-block mr-1 text-[#f00]"/>{link.title}
                                    </Link>
                                  </li>
                                );
                              case "twitter":
                                return (
                                  <li>
                                    <Link href={link.url}>
                                      <FaTwitter className="inline-block mr-1 text-[#00acee]"/>{link.title}
                                    </Link>
                                  </li>
                                );
                              case "github":
                                return (
                                  <li>
                                    <Link href={link.url}>
                                      <VscGithubInverted className="inline-block mr-1 text-[#171515] dark:text-[#e8eaea]"/>{link.title}
                                    </Link>
                                  </li>
                                );
                              case link.url.toLowerCase().startsWith("http") && link.title.toLowerCase():
                                return (
                                  <li>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                      <LuLink2 className="inline-block mr-1"/>{link.title}<LuExternalLink className="inline-block ml-1"/>
                                    </a>
                                  </li>
                                );
                              default:
                                return (
                                  <li>
                                    <Link href={link.url}>
                                      <LuLink2 className="inline-block mr-1"/>{link.title}
                                    </Link>
                                  </li>
                                );
                            }
                          })
                        }
                      </ul>
                    </p>
                  );
                case "md":
                  return (
                    <p className="markdown text-left p-2 font-medium">
                      <ReactMarkdown>{content.text}</ReactMarkdown>
                    </p>
                  );
                default:
                  return (
                    <p>
                      <span className="italic text-neutral-500 dark:text-neutral-400">この内容は無効です。</span>
                    </p>
                  );
              }
            })}
          </div>
        </Modal>
      </div>
    </main>
  );
}