import React from "react";

const ExerciseForm = ({ onChange, onSubmit, form }) => (
  <div className="container">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a title"
          name="title"
          onChange={onChange}
          value={form.title}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a description"
          name="description"
          onChange={onChange}
          value={form.description}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a image link"
          name="img"
          onChange={onChange}
          value={form.img}
          required
        />
      </div>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Example: #FF512F"
            name="leftColor"
            onChange={onChange}
            value={form.leftColor}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Example: #FF512F"
            name="rightColor"
            onChange={onChange}
            value={form.rightColor}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary float-right button-submit"
      >
        Submit
      </button>
    </form>
  </div>
);

export default ExerciseForm;
