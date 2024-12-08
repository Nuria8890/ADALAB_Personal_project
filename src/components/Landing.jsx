import "../styles/layout/Landing.scss";
import ProductsForm from "./Products/ProductsForm";
import ProductsList from "./Products/ProductsList";
import SupermarketsForm from "./Supermarkets/SupermarketsForm";
import SupermarketsList from "./Supermarkets/SupermarketsList";
import PropTypes from "prop-types";

function Landing({
  onChangeInputProduct,
  product,
  onChangeProductsList,
  productsList,
  onClickDeleteProducts,
  onChangeInputSupermarket,
  supermarket,
  onChangeSupermarketsList,
  supermarketsList,
}) {
  return (
    <>
      <main className="landing__main">
        <section className="landing__products">
          <h3>Productos</h3>
          <ProductsForm
            onChangeInputProduct={onChangeInputProduct}
            product={product}
            onChangeProductsList={onChangeProductsList}
          />
          <ProductsList
            productsList={productsList}
            onClickDeleteProducts={onClickDeleteProducts}
          />
        </section>
        <section className="landing__supers">
          <h3>Supermercados</h3>
          <SupermarketsForm
            onChangeInputSupermarket={onChangeInputSupermarket}
            supermarket={supermarket}
            onChangeSupermarketsList={onChangeSupermarketsList}
          />

          <SupermarketsList supermarketsList={supermarketsList} />
        </section>
      </main>
    </>
  );
}

export default Landing;

Landing.propTypes = {
  onChangeInputProduct: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
  onChangeProductsList: PropTypes.func.isRequired,
  productsList: PropTypes.array.isRequired,
  onClickDeleteProducts: PropTypes.func.isRequired,
  onChangeInputSupermarket: PropTypes.func.isRequired,
  supermarket: PropTypes.string.isRequired,
  onChangeSupermarketsList: PropTypes.func.isRequired,
  supermarketsList: PropTypes.array.isRequired,
};
