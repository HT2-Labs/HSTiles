import * as React from "react";
import Tile, { LAYOUT_SLIM, LAYOUT_REGULAR } from "./Tile";
import { myPlanItems, items, moreItems, recommendations } from "./items";
import { Link, Drawer, CardMedia, CardContent } from "@material-ui/core";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Item = styled.div`
  margin-right: 24px;
  display: inline-block;
`;

const MyPlan = styled.div`
  padding: 10px;
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
  padding: 10px 0px 10px 10px;
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

export const Dashboard = ({ direction }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  return (
    <div dir={direction} style={{ background: "#efefef", padding: "10px 0" }}>
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
      <MyPlan>
        <Typography variant="h1" gutterBottom>
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
      </MyPlan>
      <FocusAreaStream>
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
      </FocusAreaStream>
      <FocusAreaStream>
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
      </FocusAreaStream>
      <FocusAreaStream>
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
      </FocusAreaStream>
    </div>
  );
};

export default Dashboard;
