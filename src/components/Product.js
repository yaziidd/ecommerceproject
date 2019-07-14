import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import './Product.css';

class Product extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value) =>{
                            const { handleDetail, addToCart, openModal} = value;
                            const {img, price, title, id, inCart} = this.props.items;
                            return(
                                <div className = 'dib my-3 mx-3'>
                                    <div className = 'card' style = {{"width": "18rem"}}>
                                        <div onClick = {()=>handleDetail(id)} className = 'image-container pointer card-body'>
                                          <Link to = '/details'>
                                            <img  src = {img} alt = 'phone' />
                                          </Link>
                                            <button onClick = {()=> {openModal(id); addToCart(id)}} disabled = {(inCart) ? true : false} className = {(inCart) ? 'btn btn-success' : 'btn btn-primary cart-btn'}>
                                                {
                                                    (inCart)
                                                    ? 
                                                    'Item in Cart'
                                                    : 
                                                    <i className = 'fas fa-cart-plus'/>
                                                }
                                            </button>
                                        </div>
                                        <div className = 'card-footer d-flex justify-content-between'>
                                            <h5>{title}</h5>
                                            <h5>${price}</h5>
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

export default Product;