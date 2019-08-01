import * as React from "react";
import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const InfoDrawer = styled(({ ...other }) => <Drawer {...other} />)`
  & .MuiPaper-root {
    width: 350px;
  }
`;

export default InfoDrawer;
