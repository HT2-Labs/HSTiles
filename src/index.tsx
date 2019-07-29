import * as React from "react";
import { render } from "react-dom";

import { createMuiTheme, FormControlLabel, Container } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import curatrTheme from "./curatrTheme";
import { lighten } from "@material-ui/core/styles";
import Dashboard from "./Dashboard";

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
        fontSize: "1.4rem"
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

function App() {
  const [direction, setDirection] = React.useState(LEFT_TO_RIGHT);
  const [radius, setRadius] = React.useState(0);
  const primary = curatrTheme.primary;
  const theme = makeTheme({ direction, radius, primary });
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          value={RIGHT_TO_LEFT}
          control={<Checkbox color="primary" />}
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
          control={<Checkbox color="primary" />}
          label="Round edges"
          onClick={() => setRadius(radius === 0 ? 12 : 0)}
        />
        <Container>
          <Dashboard direction={direction} />
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
