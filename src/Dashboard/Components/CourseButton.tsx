import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const CourseButton = styled(Button)({
  background: "#00ddff",
  border: 0,
  margin: 10,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #a4abab",
  color: "white",
  height: 48,
  padding: "0 30px",
  width: "100%"
});

export default function StyledComponents() {
  return <CourseButton>Continue Course</CourseButton>;
}
