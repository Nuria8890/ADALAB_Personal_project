import "../styles/layout/Landing.scss";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Supermarkets from "./Supermarkets";

function Landing() {
  return (
    <>
      <Header />
      <main className="landing__main">
        <Products />
        <Supermarkets />
      </main>
      <Footer />
    </>
  );
}

export default Landing;
