import React from "react";

import "./styles/AddButton.css";
import buttonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="container">
      <Link to="/exercise/new">
        <div className="flex-column align-items-center">
          <img src={buttonImg} alt="button" className="add-image" />
          <h6 className="text-center">Add excercise</h6>
        </div>
      </Link>
    </div>
  );
};

export default AddButton;
