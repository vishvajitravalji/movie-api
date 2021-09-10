import React, { Fragment } from "react";


const Title = ({ item }) => {
  return (
    <Fragment>
      <td>{item.title}</td>
    </Fragment>
  );
};

export default Title;
