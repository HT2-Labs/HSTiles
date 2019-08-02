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
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MyPlan from "./Components/MyPlan";
import FocusAreaStream from "./Components/FocusAreaStream";
import Header from "../Header";
import Slider, { SliderInner, SliderItem } from "../Slider";
import { FeaturedSlider } from './Components/FeaturedSlider';
import InfoDrawer from "../InfoDrawer/InfoDrawer";
import ClearIcon from '@material-ui/icons/Clear';
import CalendarIcon from '@material-ui/icons/CalendarToday';

interface ILearningExperienceItem {
  isAssigned?: boolean;
  isRecommended?: boolean;
  layout?: string;
  glow?: boolean;
  imagePath?: string;
  description?: string;
  type: string;
  title: string;
  progress?: number;
  overlay?: any;
  onClickTile?: (event: React.MouseEvent) => void;
  onClickInfo?: (event: React.MouseEvent) => void;
}

interface IFocusArea {
  name: string;
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

  const useStyles = makeStyles(() =>
  createStyles({
    closeIcon: {
      fontSize: 32,
      color: 'white',
      border: 'solid 1px #333',
      background: '#333',
      borderRadius: '50%',
      position: 'relative',
      bottom: 220,
      left: '90%',
      cursor: 'pointer',
    },
    calendarIcon: {
      fontSize: 22,
      background: 'white',
      color: '#717171',
      margin: '0 auto',
      display: 'block',
      position: 'relative',
      top: '20%',
    },
    progressBar: {
      position: 'absolute',
      left: '17%',
      top: 15,
      marginLeft: '20px',
      background: '#fff',
      height: 11,
      borderRadius: 11,
      width: '70%'    
    },
    launchButton: {
      background: '#14b4ea',
      width: '100%',
      color: '#fff',
      boxShadow: "0px 4px 2px -2px #9e9e9e",
      '&:hover': {
        background: 'rgba(20, 180, 234, 0.6)',
      },
    },
    addButton: {
      background: '#fff',
      color: '#14b4ea',
      width: '100%',
      border: 'solid 1px #dcdcdc',
      marginTop: 15,
      boxShadow: "0px 4px 2px -2px #9e9e9e",
    }
  }),
);
  const classes = useStyles();

  return (
    <div dir={direction} style={{ background: "#efefef" }}>
      {selectedItem && (
        <InfoDrawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <CardMedia image={selectedItem.imagePath} style={{ paddingTop: "33%" }}>
            <ClearIcon onClick={() => { setIsDrawerOpen(false);}} className={classes.closeIcon} />
          </CardMedia>
          <CardContent style={{ background: "#eaeaea" }}>
            <div className="banner" style={{ margin: '0 auto', position: 'relative'}}>
              <div className="due-date-container" style={{ width: 40, height: 40, borderRadius: '50%', background: 'white', boxShadow: '0px 5px 35px #636363', float: 'left' }}>
                <CalendarIcon className={classes.calendarIcon} />
              </div>
              <Typography style={{ float: 'left', marginLeft: 10, fontWeight: 400, fontSize: 14, color: '#717171' }}>Due <br /> <strong>21/07/19</strong></Typography>
              <div className={classes.progressBar}><p style={{ position: 'absolute', right: '-26px', top: '-19px'}}>0%</p></div>
            </div>
          </CardContent>
          <CardContent>
              <Typography variant="h1" style={{ marginTop: 20 }}>{selectedItem.title}</Typography>
              <Typography style={{ marginBottom: 20, marginTop: 5, fontWeight: 100, fontSize: 12 }}>{selectedItem.type}</Typography>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </CardContent>
            <CardContent>
              <Button className={classes.launchButton}>LAUNCH CONTENT</Button>
              <Button className={classes.addButton}>ADD TO</Button>
            </CardContent>
        </InfoDrawer>
      )}
      <Header />
      <FeaturedSlider>
          <h1>HIIIIYYAAAAAA</h1>
      </FeaturedSlider>
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
