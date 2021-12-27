import * as request from './requestService.js';

const baseUrl = "https://print-tv-api.herokuapp.com/data";

export const getAll = () => request.get(`${baseUrl}/playlist`);

export const create = async (playlistData, token) => {
    let response = await fetch(`${baseUrl}/playslist`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ ...playlistData })
    });

    let result = await response.json();

    return result;
};

export const update = (channelId, channelData) => request.put(`${baseUrl}/playlist/${channelId}`, channelData);

export const remove = (channelId) => request.remove(`${baseUrl}/playlist/${channelId}`)