import styled from "styled-components";
import * as React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import curatrTheme from "../../curatrTheme";

export const ProgressBar = styled(({ completed, ...other }) => (
  <LinearProgress {...other} />
))`
  ${props =>
    props.completed &&
    "& .MuiLinearProgress-barColorPrimary {background-color: " +
      curatrTheme.complete +
      "};"}
`;

export default ProgressBar;
