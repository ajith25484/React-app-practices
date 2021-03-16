import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Post from './Post'
import PostDetails from './PostDetails';
import LifeCycle from './LifeCycle';


const Routing = () => {
    return(
        <BrowserRouter>
        <header>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand">NareshIT</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/post'>Post</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/lifecycle'>LifeCycle</Link></li>
            </ul>
            
          </div>
        </div>
      </nav>
        </header>
        <Route exact path='/' component={Home}/>
        <Route exact path='/post' component={Post}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/post/:topic' component={PostDetails}/>
        <Route exact path='/lifecycle' component={LifeCycle}/>

    </BrowserRouter>
    )
}  


export default Routing;



    