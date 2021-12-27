import * as request from './requestService.js';

const baseUrl = "https://print-tv-api.herokuapp.com/data";

export const getAll = () => request.get(`${baseUrl}/playlist`);

export const create = (channelData) => request.post(`${baseUrl}/playlist`, channelData);

export const update = (channelId, channelData) => request.put(`${baseUrl}/playlist/${channelId}`, channelData);

export const remove = (channelId) => request.remove(`${baseUrl}/playlist/${channelId}`)