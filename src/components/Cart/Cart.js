import React from 'react';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartEmpty from './CartEmpty';
import { ProductConsumer } from '../../context';
import CartTotal from './CartTotal';

class Cart extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ProductConsumer>
                    {
                        (value)=>{
                         const {cart} = value;
                         if(cart.length === 0){
                             return(
                                 <CartEmpty/>
                             )
                         }
                         else{
                             return(
                                 <div>
                                    <CartColumns/>
                                    <CartList/>
                                    <CartTotal/>
                                 </div>
                                
                             )
                         }
                        }
                    }
                </ProductConsumer>

            </React.Fragment>
        )
    }
}

export default Cart;