
export const addClient = (client) => ({
    type: 'addClient', payload: client,
});

export const deleteClient = (id) => ({
    type: 'deleteClient', payload: id,
});