import "../styles/layout/Footer.scss";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="footer">
      made by NuriaCD 🐜
      <div className="footer__logo">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
