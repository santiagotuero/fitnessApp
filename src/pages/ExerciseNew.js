import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

const ExerciseNew = ({ form, onChange, onSubmit }) => (
  <div className="exerciseNew-lateral-spaces row">
    <div className="col-sm exerciseNew-card-space">
      <Card {...form} />
    </div>
    <div className="col-sm exerciseNew-form-space">
      <ExerciseForm onChange={onChange} form={form} onSubmit={onSubmit} />
    </div>
  </div>
);

export default ExerciseNew;
