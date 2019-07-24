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
import { Theme } from "@material-ui/core/styles/createMuiTheme";

interface IOverlay {
  title: string;
  subtitle: string;
  icon: React.Component;
}

const Overlay = styled.div`
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
`;

interface ITileProps {
  assigned?: boolean;
  imagePath?: string;
  type: string;
  title: string;
  progress?: number;
  overlay?: IOverlay;
  onClickTile?: (event: React.MouseEvent) => void;
  onClickInfo?: (event: React.MouseEvent) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: "relative" as "relative",
    "&:hover $overlay": {
      display: "flex"
    }
  },
  media: {
    height: 0,
    paddingTop: "42%",
    position: "relative" as "relative"
  },
  overlay: {
    background: theme.palette.primary.main,
    color: "white"
  },
  overlaySubtitle: {
    fontSize: "1.2em"
  },
  assigned: {
    fontSize: "1.2em",
    position: "absolute" as "absolute",
    textTransform: "uppercase" as "uppercase",
    bottom: 0,
    background: "white",
    padding: "8px 20px",
    color: theme.palette.primary.main
  },
  infoButtonContainer: {
    position: "absolute" as "absolute",
    left: 0,
    right: 0,
    bottom: 86
  },
  infoButton: {
    position: "relative" as "relative",
    left: 230,
    right: 230
  },
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
  }
}));

export const Tile = (props: ITileProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={props.onClickTile}>
        {props.imagePath && (
          <CardMedia image={props.imagePath} className={classes.media}>
            {props.assigned && (
              <Typography className={classes.assigned}>
                <Label />
                Assigned
              </Typography>
            )}
            {props.overlay && (
              <Overlay className={classes.overlay}>
                <Typography>{props.overlay.title}</Typography>
                <Typography className={classes.overlaySubtitle}>
                  {props.overlay.subtitle}
                </Typography>
              </Overlay>
            )}
          </CardMedia>
        )}
        <CardContent className={classes.cardContent}>
          <Typography className={classes.typeText}>
            <TextTruncate line={2} truncateText="…" text={props.type} />
          </Typography>
          <Typography className={classes.titleText}>
            <TextTruncate line={2} truncateText="…" text={props.title} />
          </Typography>
          {props.progress !== null && (
            <LinearProgress
              variant="determinate"
              value={props.progress}
              className={classes.progressBar}
            />
          )}
        </CardContent>
      </CardActionArea>
      {props.onClickInfo && (
        <div className={classes.infoButtonContainer}>
          <IconButton
            onClick={props.onClickInfo}
            className={classes.infoButton}
            aria-label="Info"
          >
            <Info className={classes.infoIcon} />
          </IconButton>
        </div>
      )}
    </Card>
  );
};

export default Tile;
