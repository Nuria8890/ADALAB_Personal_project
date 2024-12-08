import PropTypes from "prop-types";
import "../../styles/layout/Products/ProductsItem.scss";
import { MdDelete } from "react-icons/md";

function ProductsItem({ item, index }) {
  const handleClickDelete = () => {
    console.log("borro", index);
  };

  return (
    <li className="productsItem__container">
      <div className="productsItem__container__checkbox">
        <input type="checkbox" name="products" id={"product" + index} />
        <label htmlFor={"product" + index}>{item}</label>
      </div>
      <MdDelete onClick={handleClickDelete} />
    </li>
  );
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
