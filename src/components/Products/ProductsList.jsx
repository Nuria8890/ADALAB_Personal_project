import PropTypes from "prop-types";
import ProductsItem from "./ProductsItem";

function ProductsList({ productsList }) {
  const items = productsList.map((item, i) => (
    <ProductsItem item={item} key={i} />
  ));

  return <div>{items}</div>;
}

export default ProductsList;
ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
};
