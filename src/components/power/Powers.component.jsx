import React, { useContext, useCallback, useState } from "react";
import PowerTab from "./PowerTab.component";
import { PriceContext } from "../../context/PriceContext";

export default function Powers() {
  const priceContext = useContext(PriceContext);
  const [isChecked, setIsChecked] = useState("");

  const addPowerPrice = useCallback(
    (powerPrice, id) => {
      priceContext.addPowerPrice(powerPrice);
      setIsChecked(id);
    },
    [priceContext]
  );

  return (
    <div>
      <h2 className="headline-2">Select Power:</h2>
      <div className="row">
        <PowerTab
          id="1"
          isChecked={isChecked}
          addPowerPrice={addPowerPrice}
          amount={100}
          price={0}
        />
        <PowerTab
          id="2"
          isChecked={isChecked}
          addPowerPrice={addPowerPrice}
          amount={150}
          price={200}
        />
        <PowerTab
          id="3"
          isChecked={isChecked}
          addPowerPrice={addPowerPrice}
          amount={200}
          price={500}
        />
      </div>
    </div>
  );
}
