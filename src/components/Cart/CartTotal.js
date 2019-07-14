import React from 'react';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';

class CartTotal extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value) =>{
                            const {cartTotal, cartsubTotal, cartTax, clearCart} = value;
                            return(
                                <div className = 'container-fluid'>
                                    <div className = 'row'>
                                        <div className = 'col-10 col-sm-8 mt-2 ml-sm-5 mr-lg-5 ml-md-auto text-capitalize text-right'>
                                            <Link to = '/'>
                                                <button onClick = {()=>clearCart()} className = 'btn btn-outline-danger text-uppercase mb-3 px-5 ' type = 'button'>
                                                    clear cart
                                                </button>
                                            </Link>
                                            <h5>
                                                <span>
                                                    subTotal : 
                                                </span>
                                                <strong>$ {cartsubTotal}</strong>
                                            </h5>
                                            <h5>
                                                <span>
                                                    tax : 
                                                </span>
                                                <strong>$ {cartTax}</strong>
                                            </h5>
                                            <h5>
                                                <span>
                                                    total : 
                                                </span>
                                                <strong>$ {cartTotal}</strong>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                </ProductConsumer>
            </React.Fragment>
        )
    }
}

export default CartTotal