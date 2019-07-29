import * as React from "react";
import Tile, { LAYOUT_SLIM, LAYOUT_REGULAR } from "./Tile";
import { myPlanItems, items, moreItems, recommendations } from "./items";
import {
  Link,
  Drawer,
  CardMedia,
  CardContent,
  Container,
  AppBar,
  Toolbar
} from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Item = styled.div`
  margin: 10px;
  display: inline-block;
`;

const MyPlan = styled.div`
  padding: 20px 0px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+100;Black+3D */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0e0e0e+0,7d7e7d+99,7d7e7d+100 */
  background: rgb(14, 14, 14); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(40, 40, 40, 1) 0%,
    rgba(125, 126, 125, 1) 99%,
    rgba(125, 126, 125, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(40, 40, 40, 1) 0%,
    rgba(125, 126, 125, 1) 99%,
    rgba(125, 126, 125, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 1) 0%,
    rgba(125, 126, 125, 1) 99%,
    rgba(125, 126, 125, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e0e0e', endColorstr='#7d7e7d',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  color: white;
`;

const FocusAreaStream = styled.div`
  padding: 20px 0 0px 0px;
  border-bottom: 1px solid #dddddd;
`;

const Slider = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  left: -20px;
  right: -20px;
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`;

const SliderInner = styled.div`
  min-width: 4000px;
`;

const InfoDrawer = styled(({ ...other }) => <Drawer {...other} />)`
  & .MuiPaper-root {
    width: 350px;
  }
`;

const Header = styled(({ ...other }) => <AppBar {...other} />)`
  background-color: #ffffff;
`;

export const Dashboard = ({ direction }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

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
      <Header position="static" color="default">
        <Toolbar>
          <Container>
            <Typography variant="h6" color="inherit">
              Search goes here
            </Typography>
          </Container>
        </Toolbar>
      </Header>
      <MyPlan>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            My Plan <Link style={{ color: "white" }}>> View All</Link>
          </Typography>
          <Slider>
            <SliderInner>
              {myPlanItems.map((itemProps, index) => {
                const { onClickInfo, ...props } = itemProps;
                return (
                  <Item key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      layout={LAYOUT_REGULAR}
                      {...props}
                    />
                  </Item>
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
                const { onClickInfo, ...props } = itemProps;
                return (
                  <Item key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      layout={LAYOUT_SLIM}
                      {...props}
                    />
                  </Item>
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
                return (
                  <Item key={index}>
                    <Tile
                      onClickInfo={() => {
                        setSelectedItem(props);
                        setIsDrawerOpen(true);
                      }}
                      layout={LAYOUT_SLIM}
                      {...itemProps}
                    />
                  </Item>
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
                return (
                  <Item key={index}>
                    <Tile layout={LAYOUT_SLIM} {...itemProps} />
                  </Item>
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
