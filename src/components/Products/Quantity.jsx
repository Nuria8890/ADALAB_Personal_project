import "../../styles/layout/Products/Quantity.scss";

function Quantity() {
  return (
    <>
      <input
        className="quantity__number"
        type="number"
        name="quantity-number"
        id="quantity-number"
      />
      <select name="quantity" id="quantity">
        <option value="units">uds</option>
        <option value="grams">g</option>
        <option value="kilograms">kg</option>
      </select>
    </>
  );
}

export default Quantity;
