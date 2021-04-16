import "../components/styles/Footer.css";

import React from "react";

import AddButton from "../components/AddButton";
import ExerciseList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import Loading from "../components/Loading";
import FatalError from "./500";
import Footer from "../components/Footer";

class Exercises extends React.Component {
  state = {
    data: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    await this.fetchExercises();
  }

  fetchExercises = async () => {
    try {
      let res = await fetch("http://localhost:8000/api/exercises");
      let data = await res.json();

      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  };

  render() {
    if (this.state.loading) return <Loading />;
    if (this.state.error) return <FatalError />;

    return (
      <>
        <Welcome />
        <ExerciseList exercises={this.state.data} />
        <AddButton />
        <Footer className="footer" />
      </>
    );
  }
}

export default Exercises;
