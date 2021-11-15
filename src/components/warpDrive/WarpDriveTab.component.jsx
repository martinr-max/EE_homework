import React from "react";
import SmallTab from "../../UI/SmallTab.component";
import propTypes from "prop-types";

export default function WarpDriveTab(props) {
  const { id, addWarpDrivePrice, isChecked, price, answer } = props;

  return (
    <div className="WarpDriveTab">
      <SmallTab
        selectedBtn={isChecked}
        selectedId={id}
        customFunction={() => addWarpDrivePrice(price, id)}
      >
        <p className="amount"> {answer}</p>
        <p id="price">+{price}€ </p>
      </SmallTab>
    </div>
  );
}

WarpDriveTab.propTypes = {
  addWarpDrivePrice: propTypes.func,
  id: propTypes.string,
  isChecked: propTypes.string,
  price: propTypes.number,
  answer: propTypes.string,
};
