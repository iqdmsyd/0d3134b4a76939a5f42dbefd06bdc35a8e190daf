import React, { useState } from "react";
import LocationModalView from "./LocationModalView";

const LocationModal = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeLocation(value);
    props.handleCloseModal();
  };

  return React.createElement(LocationModalView, {
    ...props,
    value,
    handleChange,
    handleSubmit,
  });
};

export default LocationModal;
