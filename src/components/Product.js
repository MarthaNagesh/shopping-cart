import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';
import './Product.css';
import PropTypes from 'prop-types';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart}=this.props.product;
        return (
            //my-3: padding top and bottom to 3 rem
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                    {value=>{
                        return(
                            <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>

                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true: false} onClick={()=>
                        value.addToCart(id)}>
                        {inCart ? (
                            <p className="text-capitalize mb-0" disabled>
                            in Cart</p>): (<i className="fa fa-cart-plus"/>)}
                        </button>
                    </div>
                        );
                    }}
                     
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                     {/* align-self-center is used to align items straight even when different size.
                     mb-0 margin bottom zero */}
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                             {/* mr-1 margin-right=1 */}
                         <span className="mr-1">$</span>
                          {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
// this is used to check the data fro any errors. need to import PropTypes from 'prop-types'
Product.proptype={
    product:PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}