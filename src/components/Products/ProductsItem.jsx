import PropTypes from "prop-types";

function ProductsItem({ item }) {
  return <div>{item}</div>;
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
};
