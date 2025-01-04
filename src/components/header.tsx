"use client";

import Link from 'next/link';
import { LuHouse } from "react-icons/lu";

import Logo from './common/logo';
import { ThemeSwitch } from './common/themeSwitch';
import { Tooltip } from './common/Tooltip';

const Header = (): JSX.Element => {
  return (
    <header className="border-b-2 border-neutral-100 dark:border-neutral-900">
      <h1 className="title"><Logo /></h1>
      <nav className="nav">
      <ul className="menu-group">
        <li className="menu-item  !relative top-0.5"><Link href="/"><Tooltip tooltipText="ホーム"><LuHouse /></Tooltip></Link></li>
        <li className="menu-item"><Link href="#">About</Link></li>
        <li className="menu-item !relative top-0.5"><ThemeSwitch /></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;