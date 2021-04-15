import React from "react";

import "./styles/Welcome.css";

const Welcome = ({ userName }) => {
  return (
    <div className="container">
      <div className="fitness-user-info">
        <h1>{`Hello ${userName}`}</h1>
        <p>Let´s workout to get someone gains!</p>
      </div>
    </div>
  );
};

export default Welcome;
