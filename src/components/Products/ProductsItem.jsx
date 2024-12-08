import PropTypes from "prop-types";
import "../../styles/layout/Products/ProductsItem.scss";
import { MdDelete } from "react-icons/md";

function ProductsItem({ item }) {
  return (
    <div className="productsItem__container">
      {item}
      <MdDelete />
    </div>
  );
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
};
