const baseUrl = "https://print-tv-api.herokuapp.com/jsonstore";

export const getAll = () => fetch(`${baseUrl}/support`).then(res =>  res.json()).then(res => Object.values(res));

export const create = (ticketData) => fetch(`${baseUrl}/support`, {
    method: "POST",
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(ticketData)
}).then(res =>  res.json()).then(res => Object.values(res));

export const remove = (ticketId) => fetch(`${baseUrl}/support/${ticketId}`, {
    method: "DELETE",
    headers: {
        'content-type': 'application/json',
    },
}).then(res =>  res.json()).then(res => Object.values(res));