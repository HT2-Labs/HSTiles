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
  background-color: ${props => props.background};
`;

const TileCard = styled(({ layout, ...other }) => <Card {...other} />)`
  position: relative;
  width: ${(props: { layout: string }) =>
    props.layout === LAYOUT_SLIM ? "180px" : "220px"};
  &:hover .Tile_Overlay {
    display: flex;
  }
`;

const TileImage = styled(({ layout, ...other }) => <CardMedia {...other} />)`
  height: 0;
  padding-top: ${props => (props.layout === LAYOUT_SLIM ? "80%" : "40%")};
  position: relative;
`;

const InfoButtonContainer = styled(({ layout, ...other }) => (
  <div {...other} />
))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${props => (props.layout === LAYOUT_SLIM ? "88px" : "86px")};
`;

const useStyles = makeStyles((theme: Theme) => ({
  overlaySubtitle: {
    fontSize: "1.2em"
  },
  status: {
    fontSize: "1.0em",
    position: "absolute" as "absolute",
    textTransform: "uppercase" as "uppercase",
    bottom: 0,
    background: "white",
    padding: "4px 10px",
    color: theme.palette.primary.main
  },
  statusIcon: {
    width: 20,
    height: 20
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
              <Typography className={classes.status}>
                <Label className={classes.statusIcon} />
                Assigned
              </Typography>
            )}
            {props.isRecommended && (
              <Typography className={classes.status}>
                <SvgIcon className={classes.statusIcon}>
                  <IconStar />
                </SvgIcon>
                Recommended
              </Typography>
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
            <TextTruncate line={1} truncateText="…" text={props.type} />
          </Typography>
          <Typography className={classes.titleText}>
            <TextTruncate
              line={props.layout === LAYOUT_SLIM ? 3 : 2}
              truncateText="…"
              text={props.title}
            />
          </Typography>
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
        <InfoButtonContainer layout={layout}>
          <IconButton
            onClick={props.onClickInfo}
            className={classes.infoButton}
            aria-label="Info"
          >
            <Info className={classes.infoIcon} />
          </IconButton>
        </InfoButtonContainer>
      )}
    </TileCard>
  );
};

export default Tile;
