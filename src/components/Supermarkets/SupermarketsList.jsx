import PropTypes from "prop-types";
import SupermarketsItem from "./SupermarketsItem";
import "../../styles/layout/Supermarkets/SupermarketsList.scss";

function SupermarketsList({ supermarketsList }) {
  const items = supermarketsList.map((item, i) => (
    <SupermarketsItem item={item} key={i} />
  ));

  return <div className="SupermarketsList__container">{items}</div>;
}

export default SupermarketsList;
SupermarketsList.propTypes = {
  supermarketsList: PropTypes.array.isRequired,
};
