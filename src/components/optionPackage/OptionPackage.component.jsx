import React, { useContext, useCallback, useState } from "react";
import "../../sass/_colors.scss";
import OptionsPackageTab from "./OptionPackageTab.component";
import "../../sass/_optionPackage.scss";
import { PriceContext } from "../../context/PriceContext";

const Basic = ["Air conditioning", "Cloth seats", "Fm radio"];

const optionsSport = [
  "Air conditioning",
  "Cloth seats",
  "Fm radio",
  "Personal tech support",
];

const optionsLux = [
  "Air conditioning",
  "Luxury seats",
  "Fm Radio",
  "Chrome Wheels",
  "Window tint",
  "Subwoofer",
];

export default function OptionPackage() {
  const priceContext = useContext(PriceContext);
  const [isChecked, setIsChecked] = useState("");

    const addOptionPrice = useCallback((optionPrice, id) => {
        priceContext.addOptionPrice(optionPrice);
        setIsChecked(id);
    }, [priceContext])
    
    return (
      <div  className="options_list">
        <div>
          <OptionsPackageTab
            key="1"
            id="o1"
            isChecked={isChecked}
            addOptionPrice={addOptionPrice}
            option_name={"Basic"}
            price={0}
            options={Basic}
          />
        </div>
        <div>
        <OptionsPackageTab
          key="2"
          id="o2"
          isChecked={isChecked}
          addOptionPrice={addOptionPrice}
          option_name={"Sport"}
          price={100}
          options={optionsSport}
        />
        </div>
        <div>
        <OptionsPackageTab
          key="3"
          id="o3"
          isChecked={isChecked}
          addOptionPrice={addOptionPrice}
          option_name={"Lux"}
          price={500}
          options={optionsLux}
        />
      </div>
    </div>
  );
    
}
