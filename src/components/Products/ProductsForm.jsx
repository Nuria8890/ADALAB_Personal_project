import PropTypes from "prop-types";
import "../../styles/layout/Products/ProductsForm.scss";

function ProductsForm({ onChangeInputProduct, product, onChangeProductsList }) {
  const handleChangeInput = (event) => {
    onChangeInputProduct(event.target.value);
  };

  const handleClickButton = (event) => {
    event.preventDefault();
    onChangeProductsList(product);
  };

  return (
    <>
      <form action="" className="productsForm__container">
        <label>
          <input
            type="text"
            name="products"
            value={product}
            placeholder="Ej: plátanos"
            className="productsForm__input"
            onChange={handleChangeInput}
          />
        </label>
        <button
          className="productsForm__add"
          type="submit"
          onClick={handleClickButton}
        >
          Añadir
        </button>
      </form>
    </>
  );
}

export default ProductsForm;

ProductsForm.propTypes = {
  onChangeInputProduct: PropTypes.func.isRequired,
  product: PropTypes.string.isRequired,
  onChangeProductsList: PropTypes.func.isRequired,
};
