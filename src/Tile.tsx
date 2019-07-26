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
import makeStyles from "@material-ui/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Theme, useTheme } from "@material-ui/core/styles";
import IconStar from "./IconStar";
import SvgIcon from "@material-ui/icons/Info";

export const LAYOUT_SLIM = "layout_slim";

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

interface IStyleProps {
  layout?: string;
}

interface ITileOverlayProps {
  background: string;
}

const TileOverlay = styled.div`
  position: absolute;
  display: none;
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
  background-color: ${(props: ITileOverlayProps) => props.background};
`;

const TileCard = styled(({ layout, ...other }) => <Card {...other} />)`
  position: relative;
  width: ${(props: { layout: string }) =>
    props.layout === LAYOUT_SLIM ? "180px" : "350px"};
  &:hover .Tile_Overlay {
    display: flex;
  }
`;

const TileImage = styled(({ layout, ...other }) => <CardMedia {...other} />)`
  height: 0;
  padding-top: ${props => (props.layout === LAYOUT_SLIM ? "60%" : "36%")};
  position: relative;
`;

const TileTitle = styled(({ layout, ...other }) => <Typography {...other} />)`
  height: ${props => (props.layout === LAYOUT_SLIM ? "80px" : "50px")};
  font-size: 1.4em;
  font-weight: 600;
`;

const TileInfoButton = styled(({ layout, ...other }) => <div {...other} />)`
  position: absolute;
  left: 0;
  right: 0;
  top: ${props => (props.layout === LAYOUT_SLIM ? "85px" : "102px")};
  & .MuiIconButton-root {
    position: relative;
    left: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
    right: ${props => (props.layout === LAYOUT_SLIM ? "130px" : "300px")};
  }
`;

const TileStatus = styled(({ color, ...other }) => <div {...other} />)`
  position: absolute;
  bottom: 0;
  background: white;
  padding: 4px 0 0 14px;
  color: ${props => props.color};
  & .MuiSvgIcon-root {
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    display: inline-block;
    margin-right: 10px;
  }
  & .MuiTypography-root {
    position: relative;
    top: -3px;
    font-size: 1em;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 10px;
  }
`;

const useStyles = makeStyles((theme: Theme) => ({
  overlaySubtitle: {
    fontSize: "1.2em"
  },
  infoButton: (props: IStyleProps) => ({
    position: "relative" as "relative",
    left: props.layout === LAYOUT_SLIM ? 130 : 170,
    right: props.layout === LAYOUT_SLIM ? 130 : 170
  }),
  infoIcon: {
    background: "white",
    "&:hover": {
      background: "rgb(240, 240, 240)"
    },
    borderRadius: "50%"
  },
  cardContent: {
    position: "relative" as "relative"
  },
  typeText: {
    fontSize: "1em",
    textTransform: "uppercase" as "uppercase"
  },
  titleText: {
    height: 50
  },
  progressBar: {
    marginTop: 10
  },
  progressBarComplete: {
    background: "green"
  }
}));

export const Tile = (props: ITileProps) => {
  const { layout } = props;
  const classes = useStyles({ layout });
  const theme = useTheme();

  return (
    <TileCard layout={layout}>
      <CardActionArea onClick={props.onClickTile}>
        {props.imagePath && (
          <TileImage image={props.imagePath} layout={layout}>
            {props.isAssigned && (
              <TileStatus color={theme.palette.primary.main}>
                <Label />
                <Typography>Assigned</Typography>
              </TileStatus>
            )}
            {props.isRecommended && (
              <TileStatus color={theme.palette.primary.main}>
                <SvgIcon>
                  <IconStar />
                </SvgIcon>
                <Typography>Recommended</Typography>
              </TileStatus>
            )}
            {props.overlay && (
              <TileOverlay
                className="Tile_Overlay"
                background={
                  props.progress === 100 ? "green" : theme.palette.primary.main
                }
              >
                {props.overlay.icon}
                <Typography>{props.overlay.title}</Typography>
                <Typography className={classes.overlaySubtitle}>
                  {props.overlay.subtitle}
                </Typography>
              </TileOverlay>
            )}
          </TileImage>
        )}
        <CardContent className={classes.cardContent}>
          <Typography className={classes.typeText}>
            <TextTruncate line={3} truncateText="…" text={props.type} />
          </Typography>
          <TileTitle layout={layout}>
            <TextTruncate
              line={props.layout === LAYOUT_SLIM ? 3 : 2}
              truncateText="…"
              text={props.title}
            />
          </TileTitle>
          {props.progress !== null && (
            <LinearProgress
              variant="determinate"
              value={props.progress}
              className={
                props.progress === 100
                  ? `${classes.progressBar} ${classes.progressBarComplete}`
                  : classes.progressBar
              }
            />
          )}
        </CardContent>
      </CardActionArea>
      {props.onClickInfo && (
        <TileInfoButton layout={layout}>
          <IconButton onClick={props.onClickInfo} aria-label="Info">
            <Info className={classes.infoIcon} />
          </IconButton>
        </TileInfoButton>
      )}
    </TileCard>
  );
};

export default Tile;
