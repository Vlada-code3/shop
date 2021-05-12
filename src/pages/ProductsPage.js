import React, { Component } from 'react';
import axios from "axios"
import { NavLink, Route } from 'react-router-dom';
import Details from '../Components/details/Details';
class ProductsPage extends Component {
    state = {
        chairs:[]
    }
    async componentDidMount() {

        try {
            const response = await axios.get(`https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs.json`)
            console.log(response);
            if (response.data) {
                const chairs = Object.keys(response.data).map(key => ({ ...response.data[key], id: key }))

                this.setState({ chairs })
            } else return
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <>
                <h2>Products</h2>
                <ul>
                    {this.state.chairs.map((chair) => (
                        <li key={chair.id}>
                            <NavLink to={`${this.props.match.url}/${chair.id}`}>{chair.name}
                            </NavLink>
                        </li>))}
                </ul>

                <Route path={`${this.props.match.path}/:chairId`} component={Details} />

            </>
        );
    }
}

export default ProductsPage;