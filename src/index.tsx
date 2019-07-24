import * as React from "react";
import { render } from "react-dom";
import { LoremIpsum } from "lorem-ipsum";
import styled from "styled-components";

import Tile from "./Tile";
import { createMuiTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { ThemeProvider } from "@material-ui/styles";
import Info from "@material-ui/icons/Info";

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
  margin-right: 24px;
  margin-top: 24px;
  width: 288px;
  height: 220px;
  display: inline-block;
`;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const LEFT_TO_RIGHT = "ltr";
const RIGHT_TO_LEFT = "rtl";

function App() {
  const [direction, setDirection] = React.useState(LEFT_TO_RIGHT);
  const theme = makeTheme({ direction });

  const makeProps = (props?: any) => {
    return {
      type: props && props.type ? props.type : lorem.generateWords(2),
      title: props && props.title ? props.title : lorem.generateSentences(1),
      assigned: props && props.assigned ? props.assigned : false,
      imagePath:
        props && props.imagePath
          ? props.imagePath
          : "https://picsum.photos/id/" +
            Math.round(Math.random() * 50) +
            "/300/200",
      progress:
        props && props.progress !== undefined
          ? props.progress
          : Math.random() * 100,
      onClickTile: event => {
        alert("Clicked Tile");
      },
      onClickInfo: event => {
        event.preventDefault();
        event.stopPropagation();
        alert("Clicked info");
      },
      overlay: {
        title: "Launch Course",
        subtitle: "Ends: 12/2/19",
        icon: <Info />
      }
    };
  };

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
        <Item>
          <Tile
            {...makeProps({
              assigned: true,
              type: "Adapt Course",
              progress: 100
            })}
          />
        </Item>
        <Item>
          <Tile
            {...makeProps({
              progress: 0,
              title: "アップルの新型ノートは予定通りに発表されるだろうか。"
            })}
          />
        </Item>
        <Item>
          <Tile
            {...makeProps({
              title: "Bananas 😱",
              progress: 33,
              imagePath:
                "data:image/jpeg;base64,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"
            })}
          />
        </Item>
        <Item>
          <Tile {...makeProps({ title: lorem.generateSentences(5) })} />
        </Item>
        <Item>
          <Tile
            {...makeProps({
              title: "AVeryLongWordLikeTheGermansUseToJustBeAnnoying",
              imagePath: "http://fabricjs.com/article_assets/2_7.png"
            })}
          />
        </Item>
        <Item>
          <Tile
            {...makeProps({
              title: "أنا أحب الكاري",
              imagePath:
                "data:image/png;base64,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"
            })}
          />
        </Item>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
