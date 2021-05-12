import axios from 'axios';
import React, { Component } from 'react';

class Details extends Component {
    state = {
        chair: {}
    }
    
    async componentDidMount() {
// const {chairId}=this.props.match.params
        console.log(this.props.match.params);
        try {
            const response = await axios.get(
                `https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs/${this.props.match.params.chairId}.json`);
           
            
            this.setState({
                chair: {...response.data, id: this.props.match.params.chairId},
               
            });
          console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidUpdate(prevProps, prevState) {
       
        if 
            (this.props.match.params.chairId !== this.state.chair?.id) {
            try {
                const response = await axios.get(
                    `https://shop-fatty-hugo-default-rtdb.firebaseio.com/chairs/${this.props.match.params.chairId}.json`);


                this.setState({
                    chair: { ...response.data, id: this.props.match.params.chairId }
                });
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        } else return;
            
  
}
    render() {
        return (
            <h1>Details bla bla</h1>
        );
    }
}

export default Details;