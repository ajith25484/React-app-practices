import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../container/Home';
import NewsDetails from '../container/News_Details'

const Routing  = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={NewsDetails}></Route>
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing;