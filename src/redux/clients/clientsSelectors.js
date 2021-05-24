const getClientsSelector = state => state.clients.items;

const errorClientSelector = state => state.clients.error;

const loaderClientSelector = state => state.clients.isLoading;

export { getClientsSelector, errorClientSelector, loaderClientSelector };
