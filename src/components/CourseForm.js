import React from "react";

function CourseForm(props) {
  return (
    <form className="form-group">
      <label htmlFor="title">Title</label>
      <div className="field">
        <input
          id="title"
          type="text"
          name="title"
          className="form-control"
          value=""
        />
      </div>

      <div className="form-group">
        <lable htmlFor="author">Author</lable>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value=""
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            className="form-category"
            value=""
          />
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
