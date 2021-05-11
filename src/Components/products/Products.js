

import axios from 'axios';
import React, { Component } from 'react'
import ProductsList from './productList/ProductsList';


import ProductsForm from './productsForm/ProductsForm';




class Products extends Component {
    state = {chairs:[]};
    async componentDidMount() {

        try {
            const response = await axios.get(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs.json`)
            console.log(response);
            if (response.data) {
                const chairs = Object.keys(response.data).map(key=>({...response.data[key], id:key}))
                
                this.setState({chairs})
            } else return
        } catch (error) {
            console.log(error);
        }
    }

    addChair = async (chair) => {
        
        try {
            const response = await axios.post(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs.json`, chair)
        
            this.setState(prevState => {
                return {
                    chairs: [...prevState.chairs, {...chair, id:response.data.name}],
                }
            })
        } catch (error) {
            console.log(error);
        }
      
    }

    deleteChair = async (id) => {
        try {
            const response = await axios.delete(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs/${id}.json`)
        
        this.setState({chairs: this.state.chairs.filter(chair=>chair.id !==id)})
        } catch (error) {
            
        }
    }
    

    render() {
        return (
            <>
            <h2>Products</h2>
            <ProductsForm addChair={this.addChair}/>
                <ProductsList products={this.state.chairs} deleteChair={this.deleteChair}/>
            </>
        );
    }
}

export default Products;
