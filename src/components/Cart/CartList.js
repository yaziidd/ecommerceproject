import React from 'react';
import {ProductConsumer} from '../../context';
import CartItems from './CartItems';

class CartList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className = 'text-center'>
                    <ProductConsumer>
                        {
                            (value)=>{
                                const {cart} = value;
                                return cart.map(item => {
                                    return(
                                        <CartItems key = {item.id} items = {item} />
                                    )

                                })
                            }
                        }
                    </ProductConsumer>
                </div>
            </React.Fragment>
        )
    }
}

export default CartList;