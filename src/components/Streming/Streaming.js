import { ControlsProvider } from '../../contexts/ControlsContext.js';
import Player from '../Player';

export default function Streaming() {
    return (
        <ControlsProvider>
            <Player vod={false} />
        </ControlsProvider>
    )
}