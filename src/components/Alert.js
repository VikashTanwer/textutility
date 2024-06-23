import React from "react";

function Alert(props) {
  return (
    <div className="alert alert-success" role="alert">
      {props.msg}
    </div>
  );
}

export default Alert;
