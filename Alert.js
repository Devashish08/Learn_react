import React from "react";

export default function Alert(props) {
   // This function should capitalize the first letter of the message.
   const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
      <strong> {capitalize(props.alert.type)} </strong> : {props.alert.message}
      </div>
    </div>
  );
}
