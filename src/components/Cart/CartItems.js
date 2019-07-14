import React from 'react';
import {ProductConsumer} from '../../context';

class CartItems extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value)=>{
                            const {increment, decrement, removeFromCart} = value;
                            const {img, src, count, total, price, id, title} = this.props.items;
                            return(
                                <div className = 'container-fluid'>
                                    <div className = 'row'>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center justify-content-center'>
                                            <img src = {img} alt = 'phone' style = {{"width": "5rem", "height": "5rem"}}/>
                                        </div>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center justify-content-center'>
                                            <span className = 'd-lg-none'>
                                                Title :
                                            </span>
                                            {title}
                                        </div>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center  justify-content-center'>
                                        <span className = 'd-lg-none'>
                                                Price :
                                            </span>
                                            ${price}
                                        </div>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center justify-content-center'>
                                                <span onClick = {()=>decrement(id)} className = 'btn btn-outline-dark'>-</span>
                                                <span className = 'btn btn-outline-dark'>{count}</span>
                                                <span onClick = {()=>increment(id)} className = 'btn btn-outline-dark'>+</span>
                                        </div>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center justify-content-center'>
                                            <span onClick = {()=> removeFromCart(id)}>
                                                <i className = 'fas fa-trash bg-danger'/>
                                            </span>
                                        </div>
                                        <div className = 'col-lg-2 text-center d-flex align-items-center justify-content-center'>
                                            <span className = 'd-lg-none'>
                                                Item Total :
                                            </span> 
                                            {total}
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

export default CartItems;