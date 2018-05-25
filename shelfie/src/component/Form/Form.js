import React, {Component} from 'react';
import axios from 'axios';


export default class form extends Component{
    constructor(props){
        super(props);

        this.state ={
            imgUrlInput: '',
            productNameInput: '',
            priceInput:''

        }
    }

// componentDidMount(){
//     this.setState({
//         imgUrlInput:this.props.product,
//         productNameInput:this.props.name,
//         priceInput:this.props.product

//     })
// }


addProduct() {
    let body = {
      itemInput: this.state.itemInput,
    priceInput: this.state.priceInput,
    quantityInput: this.state.quantityInput,
    }
    axios.post('/api/products', body).then((res) =>  {
      this.setState({
        products: res.data,
        itemInput: '',
        priceInput: '',
        quantityInput: ''
      })
    })

  }

    render(){
        console.log(this.state)
        return (
            <div>Form
                <input placeholder='Url Please' value={this.state.imgUrlInput} onChange={(e) => this.setState({ imgUrlInput: e.target.value})} />
                     
                <br/>
                <input placeholder='Please Provide a Name' value={this.state.productNameInput} onChange={(e)=> this.setState({productNameInput: e.target.value})}/>
                <br />
                <input placeholder='Be Reasonable' value={this.state.priceInput} onChange={(e)=> this.setState({priceInput: e.target.value})} />
                <br />
                <button onClick={() => this.setState({
                    imgUrlInput: '',
                    productNameInput: '',
                    priceInput: ''
                }) } >Cancel</button>
                <button >Add to Inventory</button>

            </div> 
        )
    }
}
