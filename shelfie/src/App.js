import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import Product from './component/Product/Product';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
        inventory: [],
        itemInput: '',
        priceInput: '',
        quantityInput: ''
        }
    }

    componentDidMount() {
      axios.get('/api/inventory').then((res) =>  {
        this.setState({
          inventory: res.data
        })
        console.log(res.data)
      })
    }

   
  
  render() {
    console.log(this.state)
    let mappedInventory = this.state.inventory.map((e,i) =>  {
      return (
        <div key={i}>

         <Product 

          id={e.id}
          item={e.item}
          price={e.price}
          quantity={e.quantity}
          // deleteItem={this.deleteItem} still need to add a delete method
        />
        </div> 
)
})
    return (
      <div className="App">
        <Header />
        <div>
        <Form />
        
        </div>
        <div>
        <Dashboard
        
        />

        </div>
        {mappedInventory}
      </div>
    );
  }
}

export default App;
