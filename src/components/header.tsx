import Link from 'next/link';
import Logo from './common/logo';

const Header = (): JSX.Element => {
  return (
    <header className="border-b-2 border-neutral-100 dark:border-neutral-900">
      <h1 className="title"><Logo /></h1>
      <nav className="nav">
      <ul className="menu-group">
        <li className="menu-item"><Link href="#">Shop</Link></li>
        <li className="menu-item"><Link href="#">About</Link></li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;