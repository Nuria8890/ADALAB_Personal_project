import PropTypes from "prop-types";
import "../../styles/layout/ProductsItem.scss";

function ProductsItem({ item }) {
  return <div className="productsItem__container">{item}</div>;
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
};
