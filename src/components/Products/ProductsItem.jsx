import PropTypes from "prop-types";
import "../../styles/layout/Products/ProductsItem.scss";
import { MdDelete } from "react-icons/md";

function ProductsItem({ item }) {
  const handleClickDelete = () => {
    console.log("borro");
  };

  return (
    <li className="productsItem__container">
      <div className="productsItem__container__checkbox">
        <input type="checkbox" name="product" id="product" />
        <label htmlFor="product">{item}</label>
      </div>
      <MdDelete onClick={handleClickDelete} />
    </li>
  );
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
};
