import React, { Component } from 'react';
import Product from '../Product/Product';
import axios from 'axios'

export default class dashboard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            item: item,
            price: price,
            quantity: quantity
        }
        
    }

    deleteItem(id){
        axios.delete(`/api/products/${id}`).then(res => {
          this.setState({
            inventory: res.data
          })
        })
      }

    render(){
        let mappedProducts = this.state.props.map((e, i) => {
            return (
              <div key={i}>
                <Product
                
                  id={e.id}
                  product={e.item}
                  price={e.price}
                  quantity={e.quantity}
                //   deleteItem={this.deleteItem}
      
                />
              </div>
            )
        })
        return (
            <div>
                dashboard
                {this.props.inventory}
                <Product />
            </div> 
        )

    }
    
}