import makeStyles from "@mui/styles/makeStyles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@mui/material/Slider";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import FullScreenIcon from "@mui/icons-material/Fullscreen";

import { useControlsContext } from "../../contexts/ControlsContext.js"

const useStyles = makeStyles({
    controlsWrapper: {
        left: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1,
    },
    controlIcons: {
        color: "#777",
        fontSize: 50,
        transform: "scale(0.9)",
        "&:hover": {
            color: "#fff",
            transform: "scale(1)",
        },
    },

    icons: {
        color: "#999",
        "&:hover": {
            color: "#fff",
        },
    },
    volumeSlider: {
        width: "100%",
    },
});

export default function PlayerControls({ handleClickFullscreen }) {
    const classes = useStyles();

    const { volume, play, fullScreen, controls } = useControlsContext();
    const onVolumeChange = (e) => {
        volume(e.target.value / 100);
    }

    const onPlayClick = (e) => {
        play(!controls.play);
    }
    
    const onFullScreenClick = (e) => {
        handleClickFullscreen();
        fullScreen(true);
    }

    return (
        <div className={classes.controlsWrapper}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Grid container alignItems="center" direction="row">
                        <IconButton className={classes.icons} onClick={onPlayClick}>
                            {
                                controls.play
                                    ? <PauseIcon fontSize="large" />
                                    : <PlayArrowIcon fontSize="large" />
                            }
                        </IconButton>

                        <IconButton className={classes.icons}>
                            <VolumeUpIcon fontSize="large" />
                        </IconButton>
                        <Slider
                            size="medium"
                            min={0}
                            max={100}
                            defaultValue={20}
                            className={classes.volumeSlider}
                            onChange={onVolumeChange}
                        />

                    </Grid>
                </Grid>
                <Grid item>
                    <IconButton className={classes.icons} onClick={onFullScreenClick}>
                        <FullScreenIcon fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
};