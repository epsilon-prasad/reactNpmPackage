import React from "react";

/**
 * Primary UI component for user interaction
 */
const Input = ({
  placeholder
}) => {
  return (
    <input type="text" placeholder={placeholder} />
  );
};

export default Input;