import { ControlsProvider } from '../../contexts/ControlsContext.js';
import Player from '../Player';
import Footer from '../Footer';
import Header from '../Header';

import './Player.css'

export default function Streaming() {
    return (
        <ControlsProvider>
            <Header />
            <Player vod={false} className="player" />
        </ControlsProvider>
    )
}