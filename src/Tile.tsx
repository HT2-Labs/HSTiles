import * as React from "react";

import styled from "styled-components";
import TextTruncate from "react-text-truncate";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Label from "@material-ui/icons/Label";
import CardActionArea from "@material-ui/core/CardActionArea";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useTheme } from "@material-ui/core/styles";
import IconStar from "./IconStar";
import SvgIcon from "@material-ui/core/SvgIcon";
import CheckCircle from "@material-ui/icons/CheckCircle";
import curatrTheme from "./curatrTheme";

export const LAYOUT_SLIM = "layout_slim";
export const LAYOUT_REGULAR = "layout_regular";

const LAYOUTS = {
  [LAYOUT_SLIM]: {
    width: "180px",
    imagePadding: "60%",
    titleHeight: "65px"
  },
  [LAYOUT_REGULAR]: {
    width: "350px",
    imagePadding: "36%",
    titleHeight: "40px"
  }
};

interface IOverlay {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
}

interface ITileProps {
  isAssigned?: boolean;
  isRecommended?: boolean;
  layout?: string;
  imagePath?: string;
  type: string;
  title: string;
  progress?: number;
  overlay?: IOverlay;
  onClickTile?: (event: React.MouseEvent) => void;
  onClickInfo?: (event: React.MouseEvent) => void;
}

interface ITileOverlayProps {
  background: string;
}

const TileOverlay = styled.div`
  position: absolute;
  display: flex;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  color: white;
  transition: opacity 1s;
  background-color: ${(props: ITileOverlayProps) => props.background};
`;

const TileStatus = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
`;

const TileCard = styled(({ layout, ...other }) => <Card {...other} />)`
  position: relative;
  width: ${(props: { layout: string }) => LAYOUTS[props.layout].width};
  &:hover .Tile_Overlay {
    display: flex;
    opacity: 0.9;
    transition: opacity 0.1s;
  }
`;

const TileImage = styled(({ layout, ...other }) => <CardMedia {...other} />)`
  height: 0;
  padding-top: ${props => LAYOUTS[props.layout].imagePadding};
  position: relative;
`;

const TileTitle = styled(({ layout, ...other }) => <Typography {...other} />)`
  height: ${props => LAYOUTS[props.layout].titleHeight};
  font-size: 1.4em;
  font-weight: 600;
  margin: 0px 0 16px 0;
`;

const TileType = styled(({ ...other }) => <Typography {...other} />)`
  color: #6a6a6a;
`;

const TileInfoButton = styled(({ layout, ...other }) => <div {...other} />)`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => (props.layout === LAYOUT_SLIM ? "85px" : "102px")};
  // bottom: 17px;
  & .MuiIconButton-root {
    position: relative;
    left: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
    right: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
  }
  & .MuiSvgIcon-root {
    background: white;
    & :hover {
      background: rgb(240, 240, 240);
    }
    border-radius: 50%;
  }
`;

const TileLabel = styled(({ color, ...other }) => <div {...other} />)`
  position: absolute;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 0 0 8px;
  // border-radius: 50px;
  color: ${props => props.color};
  // margin: 0 10px;
  box-shadow: 0px 1px -3px 0px rgba(0, 0, 0, 0.2);
  & .MuiSvgIcon-root {
    width: 14px;
    height: 14px;
    position: relative;
    top: 0px;
    display: inline-block;
    margin-right: 8px;
  }
  & .MuiTypography-root {
    position: relative;
    top: -3px;
    font-size: 1em;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 8px;
  }
`;

export const Tile = (props: ITileProps) => {
  const { layout } = props;
  const theme = useTheme();
  let label = null;

  if (props.isAssigned) {
    label = {
      color: theme.palette.primary.main,
      icon: <Label />,
      label: "Assigned"
    };
  } else if (props.isRecommended) {
    label = {
      color: theme.palette.primary.main,
      icon: (
        <SvgIcon>
          <IconStar />
        </SvgIcon>
      ),
      label: "Recommended"
    };
  }

  return (
    <TileCard layout={layout}>
      <CardActionArea onClick={props.onClickTile}>
        {props.imagePath && (
          <TileImage image={props.imagePath} layout={layout}>
            {props.progress === 100 && (
              <TileStatus>
                <CheckCircle fontSize="large" aria-label="Completed" />
              </TileStatus>
            )}
            {label && (
              <TileLabel color={label.color}>
                {label.icon}
                <Typography>{label.label}</Typography>
              </TileLabel>
            )}
            {props.overlay && (
              <TileOverlay
                className="Tile_Overlay"
                aria-hidden="true"
                background={
                  props.progress === 100
                    ? curatrTheme.complete
                    : theme.palette.primary.main
                }
              >
                {props.overlay.icon}
                <Typography>{props.overlay.title}</Typography>
                <Typography variant="subtitle2">
                  {props.overlay.subtitle}
                </Typography>
              </TileOverlay>
            )}
          </TileImage>
        )}
        <CardContent>
          <TileType variant="subtitle1">
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={props.type}
            />
          </TileType>
          <TileTitle layout={layout}>
            <TextTruncate
              line={props.layout === LAYOUT_SLIM ? 3 : 2}
              truncateText="…"
              element="span"
              text={props.title}
            />
          </TileTitle>
          {props.progress !== null && !props.isRecommended && (
            <LinearProgress variant="determinate" value={props.progress} />
          )}
        </CardContent>
      </CardActionArea>
      {props.onClickInfo && (
        <TileInfoButton layout={layout}>
          <IconButton onClick={props.onClickInfo} aria-label="Info">
            <Info />
          </IconButton>
        </TileInfoButton>
      )}
    </TileCard>
  );
};

export default Tile;
