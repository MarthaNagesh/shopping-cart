import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import image from '../logo.svg'
import './Navbar.css';
//import styled from 'styled-components';
import {ButtonContainer} from './Button';
    //import { format } from 'url';
export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm px-sm-5 navbar-dark">

             
                <Link to='/'>
                    <img src={image} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                {/* ml-auto aligns items to right by pushing other elements to left */}
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus"/>
                        </span>
                         my cart
                    </ButtonContainer>
                </Link>

            </nav>
        );
    }
}

