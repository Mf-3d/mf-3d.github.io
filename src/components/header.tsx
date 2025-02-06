"use client";

import Link from 'next/link';
import { LuHouse } from "react-icons/lu";

import Logo from './common/logo';
import { ThemeSwitch } from './common/themeSwitch';
import { Tooltip } from './common/Tooltip';

const Header = (): JSX.Element => {
  return (
    <header className="border-b-2 border-neutral-100 dark:border-neutral-900">
      <h1 className="header__logo"><Logo /></h1>
      <nav className="nav">
        <ul className="header__menu__group">
          <li className="header__menu__item !relative top-0.5"><Link href="/"><Tooltip tooltipText="ホーム"><LuHouse /></Tooltip></Link></li>
          <li className="header__menu__item"><Link href="#">About</Link></li>
          <li className="header__menu__item !relative top-0.5"><ThemeSwitch /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;