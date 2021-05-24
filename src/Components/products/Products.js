import React, { Component } from "react";

import ProductsList from "./productList/ProductsList";
import ProductsForm from "./productsForm/ProductsForm";
import { connect } from "react-redux";
import { addProductOperation, deleteProductOperation, getAllProductOperation } from "../../redux/products/productsOperation";
import { getAllProductsSelector } from "../../redux/products/productsSelectors";
class Products extends Component {
  // state = { chairs: [] };

  async componentDidMount() {
    this.props.getAllProductOperation();
  }

  addChair = async chair => {
    this.props.addProductOperation(chair);
  };

  deleteChair = id => {
    // const { id } = e.target;
    this.props.deleteProductOperation(id);
  };

  render() {
    return (
      <>
        <h2>Products</h2>
        {this.props.error && <h2>{this.props.error}</h2>}
        {this.props.isLoadingProduct && <h2>...loading</h2>}
        <ProductsForm addChair={this.addChair} />
        <ProductsList products={this.props.products} deleteChair={this.deleteChair} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: getAllProductsSelector(state),
  isLoadingProduct: state.products.isProductLoading,
  error: state.products.error
});

const mapDispatchToProps = {
  getAllProductOperation,
  addProductOperation,
  deleteProductOperation
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
