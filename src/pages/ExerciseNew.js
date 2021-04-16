import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import Footer from "../components/Footer";

const ExerciseNew = ({ form, onChange, onSubmit }) => (
  <div className="flex-column">
    <div className="exerciseNew-lateral-spaces row">
      <div className="col-sm exerciseNew-card-space">
        <Card {...form} />
      </div>
      <div className="col-sm exerciseNew-form-space">
        <ExerciseForm onChange={onChange} form={form} onSubmit={onSubmit} />
      </div>
    </div>
    <Footer className="footer-2" />
  </div>
);

export default ExerciseNew;
