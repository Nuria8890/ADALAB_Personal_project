import "../styles/layout/Header.scss";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>

      <h1>Súper compras</h1>
    </header>
  );
}

export default Header;
