import axios from "axios";
import { addClient, deleteClient, getAllClients, setClientLoading, setError } from "./clientsAction";
import { getClientsSelector } from "./clientsSelectors";

const addClientOperation = client => async (dispatch, getState) => {
  const clients = getClientsSelector(getState());
  if (clients.some(item => item.clientName.toLowerCase().includes(client.clientName.toLowerCase()))) {
    dispatch(setError("contact already exist"));
    return;
  }
  dispatch(setClientLoading());
  try {
    const { data } = await axios.post(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients.json`, client);
    dispatch(addClient({ ...client, id: data.name }));
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setClientLoading());
  }
};
const deleteClientOperation = id => async dispatch => {
  dispatch(setClientLoading());
  try {
    await axios.delete(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients/${id}.json`);
    dispatch(deleteClient(id));
  } catch (error) {
  } finally {
    dispatch(setClientLoading());
  }
};
const getAllClientsOperation = () => async dispatch => {
  dispatch(setClientLoading());
  try {
    const { data } = await axios.get(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/clients.json`);

    if (data) {
      const clients = Object.keys(data).map(key => ({ id: key, ...data[key] }));
      dispatch(getAllClients(clients));
      // this.setState({ clients })
    }
  } catch (error) {
  } finally {
    dispatch(setClientLoading());
  }
};

export { addClientOperation, deleteClientOperation, getAllClientsOperation };
