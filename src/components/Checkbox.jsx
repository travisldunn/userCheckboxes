import React from "react";

const Checkbox = props => {
  let classes = "checkbox fa fa-heart";
  if (!props.checked) classes += "-o unChecked";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Checkbox;
