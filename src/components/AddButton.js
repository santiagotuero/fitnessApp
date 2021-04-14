import React from "react";

import "./styles/AddButton.css";
import buttonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/exercise/new">
      <img src={buttonImg} alt="button" className="fitness-add" />
    </Link>
  );
};

export default AddButton;
