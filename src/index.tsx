import * as React from "react";
import { render } from "react-dom";
import {
  createMuiTheme,
  FormControlLabel,
  Switch,
  CssBaseline
} from "@material-ui/core";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import curatrTheme from "./curatrTheme";
import { lighten } from "@material-ui/core/styles";
import DashboardContainer from "./Dashboard";
import styled from "styled-components";

const makeTheme = (params: any) =>
  createMuiTheme({
    direction: params.direction,
    shape: {
      borderRadius: 3
    },
    palette: {
      primary: { main: params.primary },
      secondary: { main: curatrTheme.danger }
    },
    typography: {
      fontFamily: "Lato, sans-serif",
      h1: {
        fontSize: "1.8rem"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400
      },
      h3: {
        fontSize: "1.2rem"
      },
      h4: {
        fontSize: "1.2rem"
      },
      h5: {
        fontSize: "1.2rem"
      },
      h6: {
        fontSize: "1.5rem"
      },
      subtitle1: {
        fontSize: "0.7rem",
        textTransform: "uppercase"
      },
      subtitle2: {
        fontSize: "0.75rem"
      }
    },
    overrides: {
      MuiCard: {
        root: {
          borderRadius: params.radius
        }
      },
      MuiLinearProgress: {
        root: {
          background: curatrTheme.progress
        },
        colorPrimary: {
          backgroundColor: lighten(curatrTheme.progress, 0.8)
        },
        barColorPrimary: {
          backgroundColor: curatrTheme.progress
        }
      }
    }
  });

const LEFT_TO_RIGHT = "ltr";
const RIGHT_TO_LEFT = "rtl";

const Controls = styled.div`
  background-color: grey;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  z-index: 1000;
  padding: 4px 10px;
`;

function App() {
  const [direction, setDirection] = React.useState(LEFT_TO_RIGHT);
  const [radius, setRadius] = React.useState(0);
  const primary = curatrTheme.primary;
  const theme = makeTheme({ direction, radius, primary });
  return (
    <>
      <CssBaseline />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Controls>
            <FormControlLabel
              value={RIGHT_TO_LEFT}
              control={<Switch color="primary" />}
              label="Right to Left"
              checked={direction === RIGHT_TO_LEFT}
              onClick={() =>
                setDirection(
                  direction === RIGHT_TO_LEFT ? LEFT_TO_RIGHT : RIGHT_TO_LEFT
                )
              }
            />
            <FormControlLabel
              checked={radius !== 0}
              control={<Switch color="primary" />}
              label="Round edges"
              onClick={() => setRadius(radius === 0 ? 12 : 0)}
            />
          </Controls>
          <DashboardContainer direction={direction} />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
