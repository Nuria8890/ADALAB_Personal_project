import PropTypes from "prop-types";

function Products({ onChangeInput }) {
  const handleChangeInput = (event) => {
    onChangeInput(event.target.value);
  };

  return (
    <>
      <form action="">
        <label>
          <input
            type="text"
            name="products"
            placeholder="plátanos"
            onChange={handleChangeInput}
          />
        </label>
      </form>
    </>
  );
}

export default Products;

Products.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};
