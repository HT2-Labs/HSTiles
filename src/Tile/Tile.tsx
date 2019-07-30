import * as React from "react";
import TextTruncate from "react-text-truncate";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";
import Label from "@material-ui/icons/Label";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useTheme } from "@material-ui/core/styles";
import IconStar from "../Icons/IconStar";
import SvgIcon from "@material-ui/core/SvgIcon";
import CheckCircle from "@material-ui/icons/CheckCircle";
import EventIcon from "@material-ui/icons/Event";
import curatrTheme from "../curatrTheme";

import TileOverlay from "./Components/TileOverlay";
import TileStatus from "./Components/TileStatus";
import TileCard from "./Components/TileCard";
import TileImage from "./Components/TileImage";
import TileTitle from "./Components/TileTitle";
import TileType from "./Components/TileType";
import ProgressBar from "./Components/ProgressBar";
import TileInfoButton from "./Components/TileInfoButton";
import TileLabel from "./Components/TileLabel";

export const LAYOUT_SLIM = "layout_slim";
export const LAYOUT_REGULAR = "layout_regular";

export const LAYOUTS = {
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
  glow?: boolean;
  imagePath?: string;
  type: string;
  title: string;
  date: string;
  progress?: number;
  overlay?: IOverlay;
  onClickTile?: (event: React.MouseEvent) => void;
  onClickInfo?: (event: React.MouseEvent) => void;
}

export const Tile = (props: ITileProps) => {
  const { layout, glow } = props;
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
    <TileCard layout={layout} glow={glow}>
      <CardActionArea onClick={props.onClickTile}>
        {props.imagePath && (
          <TileImage
            greyscale={props.progress === 100}
            image={props.imagePath}
            layout={layout}
          >
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
            <EventIcon fontSize="inherit" style={{ marginRight: 4 }} />
            {props.date}
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
            <ProgressBar
              variant="determinate"
              completed={props.progress === 100}
              value={props.progress}
            />
          )}
          {props.isRecommended && <div style={{ height: 5 }} />}
        </CardContent>
      </CardActionArea>
      {props.onClickInfo && (
        <TileInfoButton
          layout={layout}
          color={
            props.progress === 100
              ? curatrTheme.complete
              : theme.palette.primary.main
          }
        >
          <IconButton onClick={props.onClickInfo} aria-label="Info">
            <Info />
          </IconButton>
        </TileInfoButton>
      )}
    </TileCard>
  );
};

export default Tile;
