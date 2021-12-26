import Box from '@mui/material/Box';

import ChannelsList from './ChannelsList.js';

import { useEffect, useState } from 'react';

import { get } from '../../services/requestService.js';


import './Channels.css';

export default function Channels() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    get('http://localhost:3030/public/playlist.json')
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
