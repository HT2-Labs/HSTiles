import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const AddButton = styled(Button)({
  background: "white",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px #a4abab",
  color: "#00ddff",
  height: 48,
  width: "100%",
  padding: "0 30px",
  margin: 10
});

export default function StyledComponents() {
  return <AddButton>Add To</AddButton>;
}
