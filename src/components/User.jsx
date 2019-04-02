import React from "react";
import Checkbox from "./Checkbox";

const User = ({ data, onClick }) => {
  return (
    <div className="userBox" key={data.id}>
      <h1>{data.name}</h1>
      <Checkbox checked={data.checked} onClick={() => onClick(data)} />
    </div>
  );
};

export default User;
