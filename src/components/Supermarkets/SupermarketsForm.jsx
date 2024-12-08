import PropTypes from "prop-types";
import "../../styles/layout/Supermarkets/SupermarketsForm.scss";

function SupermarketsForm({
  onChangeInputSupermarket,
  supermarket,
  onChangeSupermarketsList,
}) {
  const handleChangeInput = (event) => {
    onChangeInputSupermarket(event.target.value);
  };

  const handleClickButton = (event) => {
    event.preventDefault();
    onChangeSupermarketsList(supermarket);
  };

  return (
    <>
      <form action="" className="suermarketsForm__container">
        <label>
          <input
            type="text"
            name="supermarkets"
            value={supermarket}
            placeholder="Ej: mercadona"
            className="supermarketsForm__input"
            onChange={handleChangeInput}
          />
        </label>
        <button
          className="supermarketsForm__add"
          type="submit"
          onClick={handleClickButton}
        >
          Añadir
        </button>
      </form>
    </>
  );
}

export default SupermarketsForm;

SupermarketsForm.propTypes = {
  onChangeInputSupermarket: PropTypes.func.isRequired,
  supermarket: PropTypes.string.isRequired,
  onChangeSupermarketsList: PropTypes.func.isRequired,
};
