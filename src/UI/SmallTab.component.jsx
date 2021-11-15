import React from "react";
import "../sass/UI/_smallTab.scss";
import propTypes from "prop-types";

export default function SmallTab(props) {
  return (
    <button
      id={props.selectedBtn === props.selectedId ? "active" : null}
      className="small_tab_container"
      onClick={() => props.customFunction(props.item, props.selectedId)}
    >
      {props.children}
    </button>
  );
}

SmallTab.propTypes = {
  selectedBtn: propTypes.string,
  selectedId: propTypes.string,
  customFunction: propTypes.func,
};
