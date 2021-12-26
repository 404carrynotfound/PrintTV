import * as request from './requestService.js';

const baseUrl = process.env.BASE_URL || 'http://localhost:3030/data';

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

export const update = (playlistId, playlistData) => request.put(`${baseUrl}/playlist/${playlistId}`, playlistData);