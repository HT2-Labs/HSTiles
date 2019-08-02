import * as React from "react";
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

import Timer from "@material-ui/icons/Timer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import BrightnessHigh from "@material-ui/icons/BrightnessHigh";

import MyPlan from "./Components/MyPlan";
import FocusAreaStream from "./Components/FocusAreaStream";
import Badge from "./Components/Badge";
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
            <Badge label="Duration" icon={<Timer />} />
            <Badge label="Open Badge" icon={<VerifiedUser />} />
            <Badge label="Certificate" icon={<BrightnessHigh />} />
            <br />
            <Button variant="contained" color="primary" fullWidth={true}>
              continue course
            </Button>
            <br />
            <Button variant="contained" color="secondary" fullWidth={true}>
              add to
            </Button>
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
