import PropTypes from "prop-types";
import "../../styles/layout/Supermarkets/SupermarketsItem.scss";

function SupermarketsItem({ item }) {
  return <div className="supermarketsItem__container">{item}</div>;
}

export default SupermarketsItem;

SupermarketsItem.propTypes = {
  item: PropTypes.string.isRequired,
};
