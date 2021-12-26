import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { useState } from 'react';

import { useControlsContext } from "../../contexts/ControlsContext.js"


export default function ChannelsList({ channels }) {

    const { channel } = useControlsContext();

    const [tabValue, setTabValue] = useState(-1);

    const handleChange = (event, newValue) => {
        channel(channels[newValue].link);
        setTabValue(newValue);
    };

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={tabValue === -1 ? false : tabValue}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
        >
            {
                channels.length > 0
                    ? channels.map((tabInfo, index) => <Tab label={tabInfo.name} id={`vertical-tab-${index}`} key={tabInfo.name} aria-controls={`vertical-tabpanel-${index}`} />)
                    : <Tab label="No active channels" />
            }
        </Tabs>
    )

}