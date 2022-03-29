import { useState } from "react";
import "./style.scss";
import TickerInput from "../../components/TickerInput";
import TickerOutput from "../../components/TickerOutput";

const Ticker = () => {
  const initValues = {
    text: "Example text.",
    width: "100%",
  };
  const [inputValues, setInputValues] = useState(initValues);

  const inputChangeHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="ticker-container">
      <TickerOutput width={inputValues.width} text={inputValues.text} />
      <TickerInput
        inputValues={inputValues}
        onInputChange={inputChangeHandler}
      />
    </div>
  );
};

export default Ticker;
