import * as React from "react";
import Tile, { LAYOUT_SLIM, LAYOUT_REGULAR } from "../Tile";
import { learningExperiences } from "../Data";
import {
  Link,
  Drawer,
  CardMedia,
  CardContent,
  Container
} from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import MyPlan from "./Components/MyPlan";
import FocusAreaStream from "./Components/FocusAreaStream";
import Header from "../Header";
import Slider, { SliderInner, SliderItem } from "../Slider";

const InfoDrawer = styled(({ ...other }) => <Drawer {...other} />)`
  & .MuiPaper-root {
    width: 350px;
  }
`;

interface LearningExperienceItem {
  isAssigned?: boolean;
  isRecommended?: boolean;
  layout?: string;
  glow?: boolean;
  imagePath?: string;
  type: string;
  title: string;
  progress?: number;
  overlay?: any;
  onClickTile?: (event: React.MouseEvent) => void;
  onClickInfo?: (event: React.MouseEvent) => void;
}

interface IDashboardProps {
  direction: string;
  myPlanItems: LearningExperienceItem[];
}

export const Dashboard = ({ direction, myPlanItems }: IDashboardProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const { items, moreItems, recommendations } = learningExperiences;

  return (
    <div dir={direction} style={{ background: "#efefef" }}>
      {selectedItem && (
        <InfoDrawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <CardMedia
            image={selectedItem.imagePath}
            style={{ paddingTop: "33%" }}
          />
          <CardContent>
            <Typography variant="h1">{selectedItem.title}</Typography>
          </CardContent>
        </InfoDrawer>
      )}
      <Header />
      <MyPlan>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            My Plan <Link style={{ color: "white" }}>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {myPlanItems.map((itemProps, index) => {
                const { onClickInfo, onClickTile, ...props } = itemProps;
                return (
                  <SliderItem key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      onClickTile={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                        window.open("https://www.curatr3.com");
                      }}
                      layout={LAYOUT_REGULAR}
                      {...props}
                    />
                  </SliderItem>
                );
              })}
            </SliderInner>
          </Slider>
        </Container>
      </MyPlan>
      <FocusAreaStream>
        <Container>
          <Typography variant="h2" gutterBottom>
            Change Management <Link>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {items.map((itemProps, index) => {
                const { onClickInfo, onClickTile, ...props } = itemProps;
                return (
                  <SliderItem key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      onClickTile={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                        window.open("https://www.curatr3.com");
                      }}
                      layout={LAYOUT_SLIM}
                      {...props}
                    />
                  </SliderItem>
                );
              })}
            </SliderInner>
          </Slider>
        </Container>
      </FocusAreaStream>
      <FocusAreaStream>
        <Container>
          <Typography variant="h2" gutterBottom>
            Leadership Skills <Link>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {moreItems.map((itemProps, index) => {
                const { onClickInfo, onClickTile, ...props } = itemProps;
                return (
                  <SliderItem key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      onClickTile={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                        window.open("https://www.curatr3.com");
                      }}
                      layout={LAYOUT_SLIM}
                      {...props}
                    />
                  </SliderItem>
                );
              })}
            </SliderInner>
          </Slider>
        </Container>
      </FocusAreaStream>
      <FocusAreaStream>
        <Container>
          <Typography variant="h2" gutterBottom>
            Recommended <Link>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {recommendations.map((itemProps, index) => {
                const { onClickInfo, onClickTile, ...props } = itemProps;
                return (
                  <SliderItem key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      onClickTile={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                        window.open("https://www.curatr3.com");
                      }}
                      layout={LAYOUT_SLIM}
                      {...props}
                    />
                  </SliderItem>
                );
              })}
            </SliderInner>
          </Slider>
        </Container>
      </FocusAreaStream>
    </div>
  );
};

export default Dashboard;
