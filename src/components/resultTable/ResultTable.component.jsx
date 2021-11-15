import React, { useContext, useEffect, useState, useMemo } from "react";
import "../../sass/_resultTable.scss";
import { PriceContext } from "../../context/PriceContext";

export default function ResultTable() {
  const { colorPrice, powerPrice, warpDrive, optionPrice } =
    useContext(PriceContext);
  const [total, setTotal] = useState(1000);

  const prices = useMemo(
    () => [colorPrice, powerPrice, warpDrive, optionPrice],
    [colorPrice, powerPrice, warpDrive, optionPrice]
  );

  useEffect(() => {
    const result = prices.reduce((total, value) => total + value, 1000);
    setTotal(result);
  }, [prices]);

  return (
    <div className="resultTableDiv">
      <ul id="elements">
        <li>
          <p>Base price:</p>
          <span>1000€</span>
        </li>
        <li>
          <p>Color:</p>
          <span>+{colorPrice}€</span>
        </li>
        <li>
          <p>Power:</p>
          <span>+{powerPrice}€</span>
        </li>
        <li>
          <p>Warp drive:</p>
          <span>+{warpDrive}€</span>
        </li>
        <li>
          <p>Option package:</p>
          <span>+{optionPrice}€</span>
        </li>
      </ul>
      <div id="total">
        <h1>Total:</h1>
        <p id="total__price">{total}€ </p>
      </div>
    </div>
  );
}
