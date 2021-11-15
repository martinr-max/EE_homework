import { createContext, useState, useCallback } from "react";

export const PriceContext = createContext({});
export const PriceProvider = ({ children }) => {
  const [colorPrice, setColorPrice] = useState(0);
  const [powerPrice, setPowerPrice] = useState(0);
  const [warpDrive, setWarpDrive] = useState(0);
  const [optionPrice, setOptionPrice] = useState(0);

  const addColorPrice = useCallback((addedColorPrice) => {
    setColorPrice(addedColorPrice);
  }, []);

  const addPowerPrice = useCallback((addedPowerPrice) => {
    setPowerPrice(addedPowerPrice);
  }, []);

  const addWarpDrive = (answer) => {
    setWarpDrive(answer);
  };

  const addOptionPrice = useCallback((addedOptionPrice) => {
    setOptionPrice(addedOptionPrice);
  }, []);

  return (
    <PriceContext.Provider
      value={{
        colorPrice,
        powerPrice,
        warpDrive,
        optionPrice,
        addColorPrice,
        addPowerPrice,
        addWarpDrive,
        addOptionPrice,
      }}
    >
      {" "}
      {children}
    </PriceContext.Provider>
  );
};
