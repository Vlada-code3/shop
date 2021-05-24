import axios from "axios";
import { addProduct, deleteProduct, getAllProducts, setProductError, setProductLoading } from "./productsAction";

const getAllProductOperation = () => async dispatch => {
  dispatch(setProductLoading());
  try {
    const { data } = await axios.get(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs.json`);

    if (data) {
      const chairs = Object.keys(data).map(key => ({ ...data[key], id: key }));
      dispatch(getAllProducts(chairs));
    }
  } catch (error) {
  } finally {
    dispatch(setProductLoading());
  }
};

const addProductOperation = chair => async (dispatch, getState) => {
  dispatch(setProductLoading());
  // axios.defaults.headers.common["Authorization"] = getState().auth.tokens.idToken;
  const token = `Bearer ${getState().auth.tokens.idToken}`;
  try {
    const response = await axios.post(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs.json?auth=${token}`, chair);

    dispatch(addProduct({ ...chair, id: response.data.name }));
  } catch (error) {
    console.dir(error.response.data.error);
    dispatch(setProductError(error.response.data.error));
  } finally {
    dispatch(setProductLoading());
  }
};

const deleteProductOperation = id => async dispatch => {
  dispatch(setProductLoading());
  try {
    await axios.delete(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs/${id}.json`);
    dispatch(deleteProduct(id));
  } catch (error) {
  } finally {
    dispatch(setProductLoading());
  }
};

export { addProductOperation, deleteProductOperation, getAllProductOperation };
