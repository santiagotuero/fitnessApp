import React from "react";
import "../components/styles/Errors.css";
import FatalErrorImg from "../images/500.png";

const FatalError = () => (
  <div className="text-center">
    <h1 className="error-text">Error: 500 Unexpected Error</h1>
    <img
      src={FatalErrorImg}
      alt="500 Unexpected Error"
      className="error-image"
    />
  </div>
);

export default FatalError;
