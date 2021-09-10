import React from "react";
import "./Certification.css";

const Certification = ({ item }) => {
  return (
    <span className={"certification-" + item.certification}>
      {item.certification}
    </span>
  );
};

export default Certification;
