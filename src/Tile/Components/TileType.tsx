import styled from "styled-components";
import * as React from "react";
import Typography from "@material-ui/core/Typography";

export const TileType = styled(({ ...other }) => <Typography {...other} />)`
  color: #6a6a6a;
`;

export default TileType;
