import styled from "styled-components";
import * as React from "react";

export const TileLabel = styled(({ color, ...other }) => <div {...other} />)`
  position: absolute;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 0 0 8px;
  // border-radius: 50px;
  color: ${props => props.color};
  // margin: 0 10px;
  box-shadow: 0px 1px -3px 0px rgba(0, 0, 0, 0.2);
  & .MuiSvgIcon-root {
    width: 14px;
    height: 14px;
    position: relative;
    top: 0px;
    display: inline-block;
    margin-right: 8px;
  }
  & .MuiTypography-root {
    position: relative;
    top: -3px;
    font-size: 1em;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 8px;
  }
`;

export default TileLabel;
