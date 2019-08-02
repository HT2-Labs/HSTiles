import * as React from "react";
import styled from "styled-components";
import Tile, { LAYOUT_SLIM, LAYOUT_REGULAR } from "../Tile";
import {
  Link,
  CardMedia,
  CardContent,
  Container,
  LinearProgress,
  Button
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import MyPlan from "./Components/MyPlan";
import FocusAreaStream from "./Components/FocusAreaStream";
import Header from "../Header";
import Slider, { SliderInner, SliderItem } from "../Slider";
import InfoDrawer from "../InfoDrawer/InfoDrawer";

interface ILearningExperienceItem {
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

interface IFocusArea {
  name: string;
  description: string;
  learningExperiences: ILearningExperienceItem[];
}

interface IDashboardProps {
  direction: string;
  myPlanItems: ILearningExperienceItem[];
  focusAreas: IFocusArea[];
}

const Banner = styled.div`
  height: 300px;
  width: 100%;
  background: url(${(props: { url: string }) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Dashboard = ({
  direction,
  myPlanItems,
  focusAreas
}: IDashboardProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [
    selectedItem,
    setSelectedItem
  ] = React.useState<null | ILearningExperienceItem>(null);

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
            <LinearProgress
              value={selectedItem.progress}
              variant="determinate"
            />
            <Typography variant="h1">{selectedItem.title}</Typography>
            <Typography variant="h2">{"abcdefg"}</Typography>
          </CardContent>
        </InfoDrawer>
      )}
      <Header />
      <Banner url="https://picsum.photos/1200/300" />
      <MyPlan>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            My Plan <Link style={{ color: "white" }}>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {myPlanItems.map((itemProps, index) => {
                const { onClickInfo, onClickTile, glow, ...props } = itemProps;
                return (
                  <SliderItem key={index} margin="0 20px">
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
                      glow={true}
                      {...props}
                    />
                  </SliderItem>
                );
              })}
            </SliderInner>
          </Slider>
        </Container>
      </MyPlan>
      {focusAreas.map((focusArea, index) => {
        return (
          <FocusAreaStream>
            <Container>
              <Typography variant="h2" gutterBottom>
                {focusArea.name} <Link>> View All</Link>
              </Typography>
              <Slider>
                <SliderInner>
                  {focusArea.learningExperiences.map((itemProps, index) => {
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
        );
      })}
    </div>
  );
};

export default Dashboard;
