"use client";

import Link from 'next/link';
import { LuHouse, LuMenu } from "react-icons/lu";

import Logo from './common/logo';
import { ThemeSwitch } from './common/theme-switch';
import { Tooltip } from './common/Tooltip';

const Header = (): JSX.Element => {
  return (
    <header>
      <h1 className="header__logo"><Logo /></h1>
      <nav className="nav">
        <ul className="header__menu__group max-lg:hidden">
          <li className="header__menu__item !relative top-0.5"><Link href="/"><Tooltip tooltipText="ホーム"><LuHouse /></Tooltip></Link></li>
          <li className="header__menu__item"><Link href="#">About</Link></li>
          <li className="header__menu__item !relative top-0.5"><ThemeSwitch /></li>
        </ul>
        <ul className="header__menu__group hidden max-lg:block">
          <li className="header__menu__item !relative top-0.5"><Link href="/"><Tooltip tooltipText="ホーム"><LuHouse /></Tooltip></Link></li>
          <li className="header__menu__item !relative top-0.5"><ThemeSwitch /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;