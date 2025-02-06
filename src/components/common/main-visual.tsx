"use client";

import Image from 'next/image';
import Link from 'next/link';
import { LuTwitter, LuYoutube, LuGithub } from "react-icons/lu";

import cards from "../../../public/card.json";

const profile = cards.find(item => item.title === "About me");
const links = profile?.contents.find(item => item.type === "link")?.list;
const twitterUrl = links?.find(item => item.title === "Twitter")?.url;
const ytUrl = links?.find(item => item.title === "YouTube")?.url;
const ghUrl = links?.find(item => item.title === "GitHub")?.url;

const MainVisual = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center mb-9 p-9 bg-cover  rounded-lg" style={{
      backgroundImage: "url(/images/main-visual.jpg)"
    }}>
      <div className="flex justify-center mb-9">
        <div className="text-center border-2 border-slate-300 dark:border-slate-800 card-window bg-slate-50 dark:bg-slate-900" style={{
          width: "350px",
          height: "auto"
        }}>
          <div className="card-window__titlebar bg-slate-200 dark:bg-slate-800">
            <div className="buttons">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="text-center p-9">
            <img className="profile-icon m-auto mb-3 w-auto" src="/images/profile/icon.jpg" alt="Profile icon" width={150} height={150}/>
            <h2 className="text-center !m-0">Hello, mf7cli!</h2>
              
            <ul className="nav-social">
              <li>
                <Link href={ytUrl ? ytUrl : "#"}><LuYoutube/></Link>
              </li>
              <li>
                <Link href={twitterUrl ? twitterUrl : "#"}><LuTwitter/></Link>
              </li>
              <li>
                <Link href={ghUrl ? ghUrl : "#"}><LuGithub/></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-xs !text-neutral-50 opacity-50">
        <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E7%99%BD%E3%81%84%E7%A0%82%E6%B5%9C-3V8gdLbwDOI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@ameenfahmy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">ameenfahmy</a>が撮影した写真
      </p>
    </div>
  );
};

export default MainVisual;