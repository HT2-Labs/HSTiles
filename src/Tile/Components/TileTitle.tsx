import styled from "styled-components";
import { LAYOUTS } from "../Tile";
import * as React from "react";
import Typography from "@material-ui/core/Typography";

export const TileTitle = styled(({ layout, ...other }) => (
  <Typography {...other} />
))`
  height: ${props => LAYOUTS[props.layout].titleHeight};
  font-size: 1.4em;
  font-weight: 600;
  margin: 0px 0 16px 0;
`;

export default TileTitle;
