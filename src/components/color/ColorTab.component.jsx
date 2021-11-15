import React from "react";
import propTypes from "prop-types";

export default function ColorTab(props) {
  const { id, addColorPrice, isChecked, price, color_name, color } = props;
  return (
    <div
      onClick={() => addColorPrice(price, id)}
      id={isChecked === id ? "active" : null}
      className="colorTab"
      data-testid="custom-element"
    >
      <div className="colorbox" style={color}></div>
      <div className="color_content">
        <p id="price">+{price}€ </p>
        <p id="color_name">{color_name}</p>
      </div>
    </div>
  );
}

ColorTab.propTypes = {
  id: propTypes.string,
  isChecked: propTypes.string,
  price: propTypes.number,
  color: propTypes.object,
  color_name: propTypes.string,
};

    