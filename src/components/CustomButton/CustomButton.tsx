import React from "react";

type CustomButtonProps = {
  text: string;
  style?: React.CSSProperties;
};

const CustomButton = ({text, style}: CustomButtonProps) => (
  <button type="button" className="custom__button" style={style}>
    {text}
  </button>
);

export default CustomButton;