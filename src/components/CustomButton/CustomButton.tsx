import React from "react";

type CustomButtonProps = {
    text: string
}

const CustomButton = ({text}: CustomButtonProps) => (
  <button type="button" className="custom__button">
    {text}
  </button>
);

export default CustomButton;