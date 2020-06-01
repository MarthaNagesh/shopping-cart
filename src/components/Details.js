import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';
//import { directive } from '@babel/types';
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, img, price, company, info, inCart} = value.details;
                    return(<div className="container">
                    <div className="row">
                        <div className="my-5 mx-auto col-10 text-center text-slanted text-blue">
                            <h2>{title}</h2>
                        </div>
                    </div>
                   <div className="row">
                     <div className="container-fluid mx-auto col-10 col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product"/>

                     </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                         <h2>model : {title}</h2>
                         <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            company : <span className="text-uppercase">{company}    </span>
                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price : ${price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb=0">
                            info about the prodcut:
                        </p>
                        <p className="text-muted lead"> {info}</p>
                        <div>
                            <Link to="/">
                                <ButtonContainer>
                                    Back to products
                                </ButtonContainer>
                            </Link>

                            <ButtonContainer 
                            cart
                            disabled={inCart? true:false}
                            onClick={()=>{
                                value.addToCart(id);
                            }}
                            >
                                    {inCart ? "incart":"Addtocart" }
                            </ButtonContainer>
                        </div>
                        </div>

                    </div>


                </div>);
                        

                }}
            </ProductConsumer>
        )
    }
}
