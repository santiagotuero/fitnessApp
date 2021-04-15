import React, { useState } from "react";
import "../components/styles/ExerciseNew.css";
import Loading from "../components/Loading";
import FatalError from "./500";
import ExerciseNew from "./ExerciseNew";
import BASE_URL from "../config";

const initialValues = {
  title: "",
  description: "",
  img: "",
  leftColor: "",
  rightColor: "",
};

const ExerciseNewContainer = ({ history }) => {
  const [form, setForm] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true);

      event.preventDefault();

      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };

      await fetch(`${BASE_URL}/exercises`, config);

      history.push("/");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  if (error) return <FatalError />;

  return (
    <ExerciseNew form={form} onChange={handleChange} onSubmit={handleSubmit} />
  );
};

export default ExerciseNewContainer;
