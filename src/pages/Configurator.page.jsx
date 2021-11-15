import React from "react";
import "../sass/_configurator.scss";
import Colors from "../components/color/colors.component";
import Powers from "../components/power/Powers.component";
import WarpDrive from "../components/warpDrive/WarpDrive.component";
import OptionPackage from "../components/optionPackage/OptionPackage.component";
import ResultTable from "../components/resultTable/ResultTable.component";

export default function Configurator() {
  return (
    <div className="configurator_container">
      <h1 className="configurator_container__headline">
        Spaceship Configurator
      </h1>
      <section className="configurator_container__selection">
        <div className="colors_row">
          <Colors />
        </div>
        <div className="powers_row">
          <Powers />
        </div>
        <div className="warp_drive">
          <WarpDrive />
        </div>
        <div className="optionPackage">
          <OptionPackage />
        </div>
      </section>
      <section className="configurator_container__resultTable">
        <ResultTable />
      </section>
    </div>
  );
}
