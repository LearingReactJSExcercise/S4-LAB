import React from "react";

function CourseGoal(props) {
  const {title, description} = props;
  return (
    <>
      <li>
        <p>{title}</p>
        <p>{description}</p>
      </li>
    </>
  );
}

export default CourseGoal;
