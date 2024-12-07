import PropTypes from "prop-types";
import ProductsItem from "./ProductsItem";
import "../../styles/layout/ProductsList.scss";

function ProductsList({ productsList }) {
  const items = productsList.map((item, i) => (
    <ProductsItem item={item} key={i} />
  ));

  return <div className="productsList__container">{items}</div>;
}

export default ProductsList;
ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
};
