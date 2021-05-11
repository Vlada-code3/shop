import React from 'react';


const ClientsList = ({ clients, onDeleteClient}) => {
    return (
       <ul className="clientList">
            {clients.map(client =>
            (<li key={client.id}>
                
                <p>{client.clientName}</p>
                <p>{client.creditCard}</p>
                <button type="button" onClick={onDeleteClient} id={client.id}>
                    Delete</button>

            </li>))}
       </ul>

    );
}

export default ClientsList;