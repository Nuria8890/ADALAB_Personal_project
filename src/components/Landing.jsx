import "../styles/layout/Landing.scss";
import Footer from "./Footer";
import Header from "./Header";
import ProductsForm from "./Products/ProductsForm";
import ProductsList from "./Products/ProductsList";
import Supermarkets from "./Supermarkets";
import PropTypes from "prop-types";

function Landing({
  onChangeInput,
  product,
  onChangeProductsList,
  productsList,
}) {
  return (
    <>
      <Header />
      <main className="landing__main">
        <section className="landing__products">
          <h3>Productos</h3>
          <ProductsForm
            onChangeInput={onChangeInput}
            product={product}
            onChangeProductsList={onChangeProductsList}
          />
          <ProductsList productsList={productsList} />
        </section>
        <section className="landing__supers">
          <h3>Supermercados</h3>
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
  product: PropTypes.string.isRequired,
  onChangeProductsList: PropTypes.func.isRequired,
  productsList: PropTypes.array.isRequired,
};
