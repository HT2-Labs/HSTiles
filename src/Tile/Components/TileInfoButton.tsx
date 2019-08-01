import styled from "styled-components";
import LAYOUT_SLIM from "../Tile";
import * as React from "react";

export const TileInfoButton = styled(({ color, layout, ...other }) => (
  <div {...other} />
))`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => (props.layout === LAYOUT_SLIM ? "85px" : "102px")};
  // bottom: 17px;
  & .MuiIconButton-root {
    position: relative;
    left: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
    right: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
  }
  & .MuiSvgIcon-root {
    background: white;
    border-radius: 50%;
  }
  .MuiButtonBase-root:hover {
    background: ${props => props.color};
    opacity: 0.9;
  }
`;

export default TileInfoButton;
