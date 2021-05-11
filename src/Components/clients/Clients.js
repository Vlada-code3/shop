import React, { Component } from 'react'
import ClientsForm from './clientsForm/ClientsForm'
import ClientsList from './clientsList/ClientsList'
import { v4 as uuidv4 } from 'uuid';
import ClientsFilter from './clientsFilter/ClientsFilter';
import axios from 'axios';

class Clients extends Component {
    state = {
        clients: [],
        filter: ""
    };

    async componentDidMount() {
        try {
         const {data}= await axios.get(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients.json`)
       
            if (data) {
                const clients = Object.keys(data).map(key =>
                    ({ id: key, ...data[key] }))
                this.setState({ clients })
       }
         
            console.log(data);
        }
        catch (error) {
            
        }
    
}

    addClient = async (client) => {
        try {
            const { data } = await axios.post(
                `https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients.json`,
                client
            );
            this.setState((prevState) => ({
                clients: [...prevState.clients, { ...client, id: data.name }],
            }));
            // console.log(data);
        } catch (error) { }
    };
      
    
    
    onDeleteClient = async (e) => {
        
        try {
            const { id } = e.target
        
            const { data } = await axios.delete(
                `https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients/${id}.json`
           
            );
            this.setState({
                clients: this.state.clients.filter(client => client.id !== id)
            });
        } catch (error) { }
    
    }



    setFilter = (e) => {
        const { value } = e.target
        this.setState({
            filter: value
        })
    };

    getFilteredClients = () => {
        return this.state.clients.filter(client => client.clientName.toLowerCase().includes(this.state.filter.toLocaleLowerCase()))
}

    render() {
        return (

            <>
                
                <ClientsForm addClient={this.addClient} />
                <ClientsFilter filter={this.state.filter} setFilter={this.setFilter }/>
                <ClientsList clients={this.getFilteredClients()} onDeleteClient={this.onDeleteClient}/>
                </>
            
        );
    }
}

export default Clients;

