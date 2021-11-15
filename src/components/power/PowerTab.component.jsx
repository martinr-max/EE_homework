import React from "react";
import SmallTab from "../../UI/SmallTab.component";
import propTypes from "prop-types";

export default function PowerTab(props) {
  const { id, addPowerPrice, isChecked, price, amount } = props;


  return (
    <div className="powerTab">
      <SmallTab
        selectedBtn={isChecked}
        selectedId={id}
        customFunction={() => addPowerPrice(props.price, props.id)}
      >
        <p className="amount"> "{amount} MW"</p>
        <p id="price">+{price}€ </p>
      </SmallTab>
    </div>
  );
}
 

PowerTab.propTypes = {
  id: propTypes.string,
  isChecked: propTypes.string,
  price: propTypes.number,
  amount: propTypes.number,
};
