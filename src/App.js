import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart/Cart';
import Default from './components/default'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path = '/' component = {ProductList}/>
                    <Route path = '/details' component = {ProductDetails}/>
                    <Route path = '/cart' component = {Cart}/>
                    <Route component = {Default}/>
                </Switch>
                 <Modal/> 
            </React.Fragment>
        )
    }
}

export default App;

