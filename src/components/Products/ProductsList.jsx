import PropTypes from "prop-types";
import ProductsItem from "./ProductsItem";
import "../../styles/layout/Products/ProductsList.scss";

function ProductsList({ productsList, onClickDeleteProducts }) {
  const items = productsList.map((item, i) => (
    <ProductsItem
      item={item}
      key={i}
      index={i}
      onClickDeleteProducts={onClickDeleteProducts}
    />
  ));

  return <ul className="productsList__container">{items}</ul>;
}

export default ProductsList;
ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
  onClickDeleteProducts: PropTypes.func.isRequired,
};
