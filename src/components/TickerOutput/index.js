import { useEffect, useRef, useState } from "react";
import Keyframes from "../Keyframes";
import "./style.scss";

const TickerOutput = (props) => {
  const { text, width } = props
  const settings = {
    animationDuration: 10000,
  };

  const textRef = useRef(null);
  const wholeOutputRef = useRef(null);
  const stringRef = useRef(null);

  const [stringWidth, setStringWidth] = useState(0);
  const [wholeOutputWidth, setWholeOutputWidth] = useState(0);

  useEffect(() => {
    if (stringRef?.current?.offsetWidth > 0)
      setStringWidth(stringRef.current.offsetWidth);
    if (wholeOutputRef?.current?.offsetWidth > 0)
      setWholeOutputWidth(wholeOutputRef.current.offsetWidth);
  }, [props]);

  const getEndOfAnimation = () => {
    return stringWidth > wholeOutputWidth
      ? `${-(2 * stringWidth - wholeOutputWidth)}px`
      : "-100%"
  }

  return (
    <div style={{ width }} ref={wholeOutputRef} className="ticker-output">
      <Keyframes
        name="ticker"
        from={{ left: "100%" }}
        to={{ left: getEndOfAnimation() }}
      />

      <div
        style={{
          animationDuration: `${settings.animationDuration}ms`,
        }}
        ref={stringRef}
        className="ticker-string"
      >
        <span ref={textRef}>{text.trim() + " "}</span>
      </div>
      <div
        style={{
          animationDuration: `${settings.animationDuration}ms`,
          animationDelay: `${settings.animationDuration / 2}ms`,
          left: "100%"
        }}
        className="ticker-string"
      >
        <span>{text.trim() + " "}</span>
      </div>
    </div>
  );
};

export default TickerOutput;
