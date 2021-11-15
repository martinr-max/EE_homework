import React from "react";
import propTypes from "prop-types";

export default function OptionsPackageTab(props) {
  const { addOptionPrice, price, option_name, id, isChecked, options } = props;
  return (
    <div
      onClick={() => addOptionPrice(props.price, props.id)}
      className="optionsTab"
      id={isChecked === id ? "active" : null}
    >
      <div className="optionsTab__header">
        <h3>{option_name} </h3>
        {props.price !== 0 ? (
          <p id="optionsTab__price">+{price}€</p>
        ) : (
          <p style={{ display: "none" }}>+{price}€</p>
        )}
      </div>
      <div className="optionsTab__content">
        <ul>
          {options &&
            props.options.map((option) => {
              return <li key={option}> {option}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

OptionsPackageTab.propTypes = {
  addOptionPrice: propTypes.func,
  id: propTypes.string,
  isChecked: propTypes.string,
  options: propTypes.array,
  price: propTypes.number,
  option_name: propTypes.string,
};
