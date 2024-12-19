import PropTypes from "prop-types";
import "../../styles/layout/Products/ProductsItem.scss";
import { MdDelete } from "react-icons/md";
import Quantity from "./Quantity";

function ProductsItem({ item, index, onClickDeleteProducts }) {
  const handleClickDelete = () => {
    onClickDeleteProducts(item);
  };

  return (
    <li className="productsItem__container">
      <div className="productsItem__container__checkbox">
        <input type="checkbox" name="products" id={"product" + index} />
        <label htmlFor={"product" + index}>{item}</label>
      </div>
      <Quantity />
      <MdDelete onClick={handleClickDelete} />
    </li>
  );
}

export default ProductsItem;

ProductsItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClickDeleteProducts: PropTypes.func.isRequired,
};
