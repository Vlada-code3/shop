
const clientsReducer = (state = [], action) => {

    switch (action.type) {

        case 'addClient':
            return [...state.clients, action.payload];

        case 'deleteClient':
            return [...state.clients.filter(client => client.id !== action.payload)];

        default:
            return state;
    }
};

export default clientsReducer;