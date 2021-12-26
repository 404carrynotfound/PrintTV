import Box from '@mui/material/Box';

import ChannelsList from './ChannelsList.js';

import { useEffect, useState } from 'react';

import { getAll } from '../../services/channelsService.js';


import './Channels.css';

export default function Channels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getAll()
        .then(res => {
            setChannels(res);
        });
}, []);
  return (
    <Box className="channels-list">
      {/* <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "max-content" }}> */}
      <ChannelsList channels={channels} />
    </Box>
  );
}
