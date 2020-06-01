import React, { Component } from 'react';
import { storeProducts, detailProduct }  from './data';
import { get } from 'https';


const ProductContext = React.createContext();// context is an object
//the context consists of two conmponents
//Provider this should be placed on top if you want your applkication to use it. the highest point is in index.js
//Consumer


class ProductProvider extends Component {
    state= {
        products:storeProducts,
        details: detailProduct,
        cart:[]
    }
    getItem =id=>{
        const product= this.state.products.find(item=> item.id === id);
        return product;

        }
    handleDetail = id =>{
        const product=this.getItem(id);
        this.setState(()=>{
            return {details:product}
        })
    }
    addToCart = id => {
        let tempProducts= [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product=tempProducts[index];
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(
            ()=>{
            return {products:tempProducts, 
                cart: [...this.state.cart, product] };
            },()=>
            {
                console.log(this.state);
            });

        };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart : this.addToCart
            }}> 
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer= ProductContext.Consumer;

export {ProductProvider, ProductConsumer};