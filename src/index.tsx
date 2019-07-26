import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import { createMuiTheme, FormControlLabel, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";

import Tile, { LAYOUT_SLIM } from "./Tile";
import { myPlanItems, items, moreItems } from "./items";

const makeTheme = (params: any) =>
  createMuiTheme({
    direction: params.direction,
    shape: {
      borderRadius: 3
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
          borderRadius: 0
        }
      }
    }
  });

const Item = styled.div`
  margin-right: 24px;
  display: inline-block;
`;

const MyPlan = styled.div`
  padding: 10px;
  background: #2f2f2f;
  margin-bottom: 14px;
  color: white;
`;

const FocusAreaStream = styled.div`
  padding: 10px;
  margin: 10px 0;
`;

const Slider = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 10px;
  /* margin: 10px 0; */
`;

const SliderInner = styled.div`
  min-width: 4000px;
`;

const LEFT_TO_RIGHT = "ltr";
const RIGHT_TO_LEFT = "rtl";

function App() {
  const [direction, setDirection] = React.useState(LEFT_TO_RIGHT);
  const theme = makeTheme({ direction });

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <FormControlLabel
          value={RIGHT_TO_LEFT}
          control={<Checkbox color="primary" />}
          label="Right to Left"
          onClick={() =>
            setDirection(
              direction === RIGHT_TO_LEFT ? LEFT_TO_RIGHT : RIGHT_TO_LEFT
            )
          }
        />
        <div
          dir={direction}
          style={{ background: "#efefef", padding: "10px 0" }}
        >
          <MyPlan>
            <Typography variant="h1" gutterBottom>
              My Plan <Link style={{ color: "white" }}>> View All</Link>
            </Typography>
            <Slider>
              <SliderInner>
                {myPlanItems.map((itemProps, index) => (
                  <Item key={index}>
                    <Tile {...itemProps} />
                  </Item>
                ))}
              </SliderInner>
            </Slider>
          </MyPlan>
          <FocusAreaStream>
            <Typography variant="h2" gutterBottom>
              Change Management <Link>> View All</Link>
            </Typography>
            <Slider>
              <SliderInner>
                {items.map((itemProps, index) => {
                  return (
                    <Item key={index}>
                      <Tile layout={LAYOUT_SLIM} {...itemProps} />
                    </Item>
                  );
                })}
              </SliderInner>
            </Slider>
          </FocusAreaStream>
          <FocusAreaStream>
            <Typography variant="h2" gutterBottom>
              Recommended: Leadership Skills <Link>> View All</Link>
            </Typography>
            <Slider>
              <SliderInner>
                {moreItems.map((itemProps, index) => {
                  return (
                    <Item key={index}>
                      <Tile layout={LAYOUT_SLIM} {...itemProps} />
                    </Item>
                  );
                })}
              </SliderInner>
            </Slider>
          </FocusAreaStream>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
