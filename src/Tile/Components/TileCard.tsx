import * as React from "react";
import styled from "styled-components";
import { LAYOUTS } from "../Tile";
import Card from "@material-ui/core/Card";
import curatrTheme from "../../curatrTheme";

export const TileCard = styled(({ layout, glow, ...other }) => (
  <Card {...other} />
))`
  position: relative;
  width: ${(props: { layout: string }) => LAYOUTS[props.layout].width};
  ${(props: { glow?: boolean }) =>
    props.glow && "box-shadow: 0px 0px 8px 0px " + curatrTheme.primary + ";"};
  &:hover .Tile_Overlay,
  .MuiCardActionArea-root:focus .Tile_Overlay {
    display: flex;
    opacity: 0.9;
    transition: opacity 0.1s;
  }
  &:hover .MuiCardMedia-root,
  .MuiCardActionArea-root:focus .MuiCardMedia-root {
    -webkit-filter: none;
    filter: none;
  }
  &:hover,
  .MuiCardActionArea-root:focus,
  .MuiCardActionArea-root:focus .MuiCardMedia-root {
    transform: scale(1.05);
    transition: transform 0.5s;

    // Remove animations for improved accessibility
    @media (prefers-reduced-motion: reduce) {
      transform: scale(1);
    }
  }
`;

export default TileCard;
