import "../styles/layout/Landing.scss";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products/Products";
import ProductsList from "./Products/ProductsList";
import Supermarkets from "./Supermarkets";
import PropTypes from "prop-types";

function Landing({ onChangeInput }) {
  return (
    <>
      <Header />
      <main className="landing__main">
        <section className="landing__products">
          <Products onChangeInput={onChangeInput} />
          <ProductsList />
        </section>
        <section>
          <Supermarkets />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;

Landing.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};
