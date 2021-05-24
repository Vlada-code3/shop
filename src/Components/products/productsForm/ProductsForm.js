import React, { Component } from "react";

class ProductsForm extends Component {
  state = {
    name: "",
    model: "",
    colors: ["red"],
    price: ""
  };
  onHandleSubmit = e => {
    e.preventDefault();
    this.props.addChair(this.state);
    this.setState({
      name: "",
      model: "",
      colors: ["green"],
      price: ""
    });
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); //___v [name] prihodit name i price
  };
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name: <input name="name" type="text" onChange={this.onHandleChange} value={this.state.name} />
        </label>

        <label>
          Price:
          <input name="price" type="text" onChange={this.onHandleChange} value={this.state.price} />
        </label>
        <label>
          Model:
          <input name="model" type="text" onChange={this.onHandleChange} value={this.state.model} />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ProductsForm;
