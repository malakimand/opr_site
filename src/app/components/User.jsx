import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ''
      },
      allProducts: {
        name: '',
        price: 0,
        quant: 0,
        total: 0
      }

    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios.get('/products')
      .then( (response) => {
      console.log(response);
        this.setState({
          allProducts: response.data.allProducts
        });
        console.log(this.state);
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.fetchUsers();
    
  }

  render() {
    return (
      <div className="user">
        <h1>Product Data</h1>
        {(this.state.allProducts.name != '') ? this.state.allProducts.map((product) => {
        return (<div key={product.product_id}>
          product name: {product.product_name}
          <br/>product unit cost: {product.product_unit_cost} 
          <br/>quantity: {product.product_quantity} 
        <br/>product total cost: {product.product_total_cost}
          <br/> <br/>
        </div>)
          }) : "fail"}
      </div>
    );
  }
}

export default User;
