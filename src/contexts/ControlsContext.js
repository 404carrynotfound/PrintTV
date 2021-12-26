import { createContext, useContext, useState } from "react";

const initialControlsState = {
    play: false,
    volume: 0.2,
    fullScreen: false,
    channel: ''
};

export const ControlsContext = createContext();

export const ControlsProvider = ({ children }) => {
    const [controls, setControls] = useState(initialControlsState);

    const volume = (volume) => {
        setControls(state => {
            return {
                ...state,
                volume
            }
        })
    };

    const play = (play) => {
        setControls(state => {
            return {
                ...state,
                play
            }
        })
    };

    const fullScreen = (fullScreen) => {
        setControls(state => {
            return {
                ...state,
                fullScreen
            }
        })
    }

    const channel = (channel) => {
        setControls(state => {
            return {
                ...state,
                channel,
                play: true
            }
        })
    }


    return (
        <ControlsContext.Provider value={{ controls, play, volume, fullScreen, channel }}>
            {children}
        </ControlsContext.Provider>
    )
}

export const useControlsContext = () => {
    const controlsState = useContext(ControlsContext);

    return controlsState;
}