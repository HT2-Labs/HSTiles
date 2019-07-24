import * as React from "react";
import { render } from "react-dom";

import styled from "styled-components";

import { createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider } from "@material-ui/styles";

import Tile, { LAYOUT_SLIM } from "./Tile";
import items from "./items";

const makeTheme = (params: any) =>
  createMuiTheme({
    direction: params.direction,
    overrides: {
      MuiCard: {
        root: {
          borderRadius: 0
        }
      }
    }
  });

const Item = styled.div`
  margin-left: 24px;
  margin-top: 24px;
  display: inline-block;
`;

const Slider = styled.div`
  /* height: 280px; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const SliderInner = styled.div`
  min-width: 2000px;
`;

const LEFT_TO_RIGHT = "ltr";
const RIGHT_TO_LEFT = "rtl";

function App() {
  const [direction, setDirection] = React.useState(LEFT_TO_RIGHT);
  const theme = makeTheme({ direction });

  return (
    <ThemeProvider theme={theme}>
      <Typography>Right to Left:</Typography>
      <Checkbox
        onClick={() =>
          setDirection(
            direction === RIGHT_TO_LEFT ? LEFT_TO_RIGHT : RIGHT_TO_LEFT
          )
        }
      />
      <div dir={direction}>
        <Slider>
          <SliderInner>
            {items.map(itemProps => (
              <Item>
                <Tile {...itemProps} />
              </Item>
            ))}
          </SliderInner>
        </Slider>
        <Slider>
          <SliderInner>
            {items.map(itemProps => {
              return (
                <Item>
                  <Tile layout={LAYOUT_SLIM} {...itemProps} />
                </Item>
              );
            })}
          </SliderInner>
        </Slider>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
