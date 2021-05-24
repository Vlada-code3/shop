import React, { Component } from "react";
import ClientsForm from "./clientsForm/ClientsForm";
import ClientsList from "./clientsList/ClientsList";

import ClientsFilter from "./clientsFilter/ClientsFilter";

import { connect } from "react-redux";

import { addClientOperation, deleteClientOperation, getAllClientsOperation } from "../../redux/clients/clientsOperations";
import { errorClientSelector, getClientsSelector, loaderClientSelector } from "../../redux/clients/clientsSelectors";

class Clients extends Component {
  state = {
    filter: ""
  };

  async componentDidMount() {
    this.props.getAllClientsOperation();
  }

  addClient = async client => {
    this.props.addClientOperation(client);
  };

  onDeleteClient = async e => {
    const { id } = e.target;

    this.props.deleteClientOperation(id);
  };

  setFilter = e => {
    const { value } = e.target;
    this.setState({
      filter: value
    });
  };

  getFilteredClients = () => {
    return this.props.clients.filter(client => client.clientName.toLowerCase().includes(this.state.filter.toLocaleLowerCase()));
  };

  render() {
    return (
      <>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoading && <h2>...loading</h2>}
        <ClientsForm addClient={this.addClient} />
        <ClientsFilter filter={this.state.filter} setFilter={this.setFilter} />
        <ClientsList clients={this.getFilteredClients()} onDeleteClient={this.onDeleteClient} />
      </>
    );
  }
}
const mapStateToProps = state => ({
  clients: getClientsSelector(state),
  isLoading: loaderClientSelector(state),
  error: errorClientSelector(state)
});

const mapDispatchToProps = {
  getAllClientsOperation,
  addClientOperation,
  deleteClientOperation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
