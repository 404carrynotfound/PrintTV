import ReactPlayer from 'react-player'
import Grid from '@mui/material/Grid';

import Channels from './Cannels';
import PlayerControls from './PlayerControls.js';

import { useControlsContext } from "../../contexts/ControlsContext.js"

import { useRef } from 'react'
import screenfull from 'screenfull'

export default function Player() {
    const { controls } = useControlsContext();

    const player = useRef(null);

    const handleClickFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.request(player.current.wrapper);
        }
    };

    return (
        <Grid container spacing={2} direction="row-reverse" justifyContent="center" alignItems="center">
            <Grid item lg={2} xs={0} />
            <Grid item lg={8} xs={12}>
                <div>
                    <ReactPlayer ref={player} controls={controls.fullScreen} width="100%" height="100%" volume={controls.volume} playing={controls.play} key="file" url="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" />
                    <PlayerControls handleClickFullscreen={handleClickFullscreen} />
                </div>
            </Grid>
            <Grid item lg={2} xs={12}>
                <Channels />
            </Grid>

        </Grid>
    );
}