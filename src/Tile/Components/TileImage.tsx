import * as React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../Tile";
import CardMedia from "@material-ui/core/CardMedia";

export const TileImage = styled(({ greyscale, layout, ...other }) => (
  <CardMedia {...other} />
))`
  height: 0;
  padding-top: ${props => LAYOUTS[props.layout].imagePadding};
  position: relative;
  // Known issue: This greyscale filter will not work in IE
  ${props =>
    props.greyscale &&
    "-webkit-filter: grayscale(100%); filter: grayscale(100%);"}
`;

export default TileImage;
