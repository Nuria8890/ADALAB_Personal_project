import "../styles/layout/Header.scss";
import Carrito from "../images/carrito_fast.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Carrito} alt="carrito" />
      <h1>Súper compras</h1>
    </header>
  );
}

export default Header;
