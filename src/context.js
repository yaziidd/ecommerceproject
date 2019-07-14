import React from 'react';
import { detailProduct, storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            modalProduct: detailProduct,
            productDetail: detailProduct,
            cart: [],
            modalOpen: false,
            cartTotal: 0,
            cartsubTotal: 0,
            cartTax: 0,
        }
    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts =  ()=>{
        let tempProduct = [];
        storeProducts.map(item =>{
            let singleItem = {...item};
            tempProduct = [...tempProduct, singleItem]
        })
        this.setState(()=>{
            return {
                products: [...tempProduct]
            }
        })
    }

    getItemId = (id)=>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id)=>{
        const product = this.getItemId(id);
        this.setState(()=>{
            return{
                productDetail: product
            }
        })
    }

    openModal = (id)=>{
        let product = this.getItemId(id);
        this.setState(()=>{
            return{
                modalOpen: true, 
                modalProduct: product
            }
        })
    }

    closeModal = ()=>{
        this.setState(()=>{
            return{
                modalOpen: false
            }
        })
    }

    addTotal = ()=>{
        let subTotal = 0;
        this.state.cart.map(item =>{
            subTotal += item.total 
        })
        let tempTax = subTotal * 0.1;
        let tax = parseFloat(tempTax.toFixed(2));
        let total = subTotal + tax;
        this.setState(()=>{
            return {
                cartTotal: total,
                cartsubTotal: subTotal,
                cartTax : tax
            }
        })

    }

    addToCart = (id)=>{
        let tempProduct = [...this.state.products];
        let index = tempProduct.indexOf(this.getItemId(id));
        let product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        let price = product.price;
        product.total = price;
        this.setState(()=>{
            return{
                products: [...tempProduct],
                cart: [...this.state.cart, product]
            }
        },()=>{
            this.addTotal()
        })
    }

    removeFromCart = (id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id)
        //items with different id should be returned back, while the one that the id matches should be deleted
        const index = tempProducts.indexOf(this.getItemId(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(()=>{
            return{
                cart: [...tempCart],
                products: [...tempProducts]
            }
        },
        ()=>{
            this.addTotal();
        })
    }


   
    increment = (id)=>{
        let tempCart = [...this.state.cart];
        let selectedItem = tempCart.find(item => item.id === id);
        let index = tempCart.indexOf(selectedItem);
        let product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return{
                cart: [...tempCart]
            }
        },()=>{
            this.addTotal();
        })   
    }

    decrement = (id)=>{
        let tempCart = [...this.state.cart];
        let selectedItem = tempCart.find(item => item.id === id);
        let index = tempCart.indexOf(selectedItem);
        let product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0){
            this.removeFromCart(id)
        }
        else{
            product.total = product.count * product.price;
            this.setState(()=>{
                return{
                    cart: [...tempCart]
                }
            },
            ()=>{
                this.addTotal();
            })
        }
    }

    clearCart = ()=>{
        this.setState(()=>{
            return{
                cart:[]
            }
        },()=>{
            this.getProducts();
            this.addTotal();            
        })
    }

    render(){
        return(
            <ProductContext.Provider value = {{
                ...this.state,
                increment: this.increment,
                decrement: this.decrement,
                removeFromCart: this.removeFromCart,
                closeModal: this.closeModal,
                openModal: this.openModal,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
