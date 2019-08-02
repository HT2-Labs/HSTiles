import styled from "styled-components";
import { LAYOUT_SLIM } from "../Tile";
import * as React from "react";

export const TileInfoButton = styled(({ layout, ...other }) => (
  <div {...other} />
))`
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props: { layout: string }) =>
    props.layout === LAYOUT_SLIM ? "82px" : "110px"};
  // bottom: 17px;
  & .MuiIconButton-root {
    position: relative;
    font-size: 1.9rem;
    left: ${(props: { layout: string }) =>
      props.layout === LAYOUT_SLIM ? "126px" : "323px"};
    right: ${(props: { layout: string }) =>
      props.layout === LAYOUT_SLIM ? "126px" : "323px"};
  }
  & .MuiSvgIcon-root {
    background: white;
    border-radius: 50%;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  }
  .MuiButtonBase-root:hover {
    background: ${props => props.color};
    opacity: 0.9;
  }
`;

export default TileInfoButton;
