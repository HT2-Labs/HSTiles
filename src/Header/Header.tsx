import * as React from "react";
import { Container, AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const HeaderWrapper = styled(({ ...other }) => <AppBar {...other} />)`
  background-color: #ffffff;
`;

export const Header = () => (
  <HeaderWrapper position="static" color="default">
    <Toolbar>
      <Container>
        <Typography variant="h6" color="inherit">
          Search goes here
        </Typography>
      </Container>
    </Toolbar>
  </HeaderWrapper>
);

export default Header;
