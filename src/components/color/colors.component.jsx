import React, { useContext, useCallback, useState } from "react";
import ColorTab from "./ColorTab.component";
import "../../sass/_colors.scss";
import { PriceContext } from "../../context/PriceContext";

export default function Colors() {
  const priceContext = useContext(PriceContext);
  const [isChecked, setIsChecked] = useState("");

  const addColorPrice = useCallback(
    (colorPrice, id) => {
      priceContext.addColorPrice(colorPrice);
      setIsChecked(id);
    },
    [priceContext]
  );

  return (
    <div className="color_container">
      <h2 className="headline-2">Select color:</h2>
      <div className="row">
        <ColorTab
          id="1"
          isChecked={isChecked}
          addColorPrice={addColorPrice}
          price={0}
          color_name={"Snow"}
          color={{ backgroundColor: "#FFFFF" }}
        />
        <ColorTab
          id="2"
          isChecked={isChecked}
          addColorPrice={addColorPrice}
          price={100}
          color_name={"Volcano"}
          color={{ backgroundColor: "#FF7A00" }}
        />
        <ColorTab
          id="3"
          isChecked={isChecked}
          addColorPrice={addColorPrice}
          price={100}
          color_name={"Sky"}
          color={{ backgroundColor: "#6BE4FF" }}
        />
      </div>
    </div>
  );
}
