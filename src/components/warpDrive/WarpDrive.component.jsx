import React, { useContext, useCallback, useState } from "react";
import WarpDriveTab from "./WarpDriveTab.component";
import "../../sass/_wapDrive.scss";
import { PriceContext } from "../../context/PriceContext";

export default function WarpDrive() {
  const priceContext = useContext(PriceContext);
  const [isChecked, setIsChecked] = useState("");

  const addWarpDrivePrice = useCallback(
    (addedWarpDrivePrice, id) => {
      priceContext.addWarpDrive(addedWarpDrivePrice);
      setIsChecked(id);
    },
    [priceContext]
  );
  return (
    <div>
      <h2 className="headline-2">Warp drive:</h2>
      <div id="Wap_Drive_row">
        <WarpDriveTab
          isChecked={isChecked}
          id="a1"
          addWarpDrivePrice={addWarpDrivePrice}
          answer={"NO"}
          price={0}
        />
        <WarpDriveTab
          isChecked={isChecked}
          id="a2"
          addWarpDrivePrice={addWarpDrivePrice}
          answer={"YES"}
          price={1000}
        />
      </div>
    </div>
  );
  }