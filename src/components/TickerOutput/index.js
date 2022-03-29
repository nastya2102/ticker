import { useEffect, useRef, useState } from "react";
import Keyframes from "../Keyframes";
import "./style.scss";

const TickerOutput = ({ text, width }) => {
  const settings = {
    animationDuration: 10000,
  };

  const textRef = useRef(null);
  const wholeOutputRef = useRef(null);
  const stringRef = useRef(null);

  const [arrayOfText, setArrayOfText] = useState([text]);
  const [stringWidth, setStringWidth] = useState(0);

  const getTextMultiplier = () => {
    if (
      textRef.current &&
      wholeOutputRef.current &&
      textRef.current.offsetWidth !== 0 &&
      wholeOutputRef.current.offsetWidth !== 0
    ) {
      const multi = Math.round(
        wholeOutputRef.current.offsetWidth / textRef.current.offsetWidth
      );
      return multi > 0 ? multi : 1;
    }
  };

  useEffect(() => {
    setArrayOfText(new Array(getTextMultiplier()).fill(text));
  }, [text, width]);

  useEffect(() => {
    if (stringRef?.current?.offsetWidth > 0)
      setStringWidth(stringRef.current.offsetWidth);
  }, [arrayOfText]);

  const textExpander = () => {
    return (
      arrayOfText.length &&
      arrayOfText.map((text, index) => {
        return <span key={index}>{text.trim() + " "}</span>;
      })
    );
  };

  return (
    <div style={{ width }} ref={wholeOutputRef} className="ticker-output">
      <Keyframes
        name="ticker"
        from={{ left: `${stringWidth}px`, opacity: 1 }}
        to={{ left: `${-stringWidth}px`, opacity: 1 }}
      />

      <div
        style={{
          animationDuration: `${settings.animationDuration}ms`,
        }}
        ref={stringRef}
        className="ticker-string"
      >
        <span ref={textRef}>{text.trim() + " "}</span>
        {textExpander()}
      </div>
      <div
        style={{
          animationDuration: `${settings.animationDuration}ms`,
          animationDelay: `${settings.animationDuration / 2}ms`,
        }}
        className="ticker-string"
      >
        <span>{text.trim() + " "}</span>
        {textExpander()}
      </div>
    </div>
  );
};

export default TickerOutput;
