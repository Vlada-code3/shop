import React, { Component } from 'react';

class ClientsForm extends Component {
    state = {
        clientName: "",
        creditCard:"",
        
    }
    
    onHandleSubmit = (e) => {
        e.preventDefault()
this.props.addClient(this.state)
        this.setState({
            clientName: "",
            creditCard: "",
   })
    }

    onHandleChange = (e) => {
        
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({
            [name]:value
        })
            
    }

    render() {
        return (
            <form onSubmit={this.onHandleSubmit}>

                <label>
                    Client:
                    <input type="text"
                        name="clientName"
                        value={this.state.clientName}
                        onChange={this.onHandleChange}
                    />
                </label>
                
                <label>
                    CreditCard:
                    <input type="text"
                        name="creditCard"
                        value={this.state.creditCard}
                        onChange={this.onHandleChange}
                    />
                </label>
<button type="submit">Save</button>
            </form>
        );
    }
}

export default ClientsForm;