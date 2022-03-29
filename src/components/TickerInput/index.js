import "./style.scss"

const TickerInput = ({ onInputChange, inputValues }) => {
  const inputChangeHandler = (e) => {
    onInputChange(e);
  };

  return (
    <div className="ticker-input">
      <div>
        <label htmlFor="text">Ticker text</label>
        <input
          onChange={inputChangeHandler}
          placeholder="Please enter the text"
          type="text"
          name="text"
          value={inputValues.text}
        />
      </div>
      <div>
        <label htmlFor="text">Ticker width</label>
        <input
          onChange={inputChangeHandler}
          placeholder="Use css metrics"
          type="text"
          name="width"
          value={inputValues.width}
        />
      </div>
    </div>
  );
};

export default TickerInput;
