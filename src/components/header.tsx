import Link from 'next/link';
import LogoLight from './common/logo/logo_light';

const Header = () => {
  return (
    <header className="">
      <h1 className="title">mf7cli</h1>
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