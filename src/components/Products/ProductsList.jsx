import PropTypes from "prop-types";

function ProductsList({ productsList }) {
  console.log("productsList", productsList);

  return <div>Products List</div>;
}

export default ProductsList;
ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
};
